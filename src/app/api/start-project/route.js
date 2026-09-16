import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { services, budget, name, email, company, website, brief } = await req.json();

    if (!Array.isArray(services) || services.length === 0) {
      return Response.json({ success: false, error: "Pick at least one service first." }, { status: 400 });
    }
    if (!name?.trim()) {
      return Response.json({ success: false, error: "We need a name to reply to." }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email?.trim() || "")) {
      return Response.json({ success: false, error: "That email does not look right." }, { status: 400 });
    }
    if (!brief || brief.trim().length < 12) {
      return Response.json({ success: false, error: "Tell us a little more about the problem." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.host,
      port: 465,
      secure: true,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });

    await transporter.sendMail({
      from: '"Sitechs" <noreply@sitechs.co>',
      to: "info@sitechs.co",
      replyTo: email,
      subject: `New project brief: ${name.trim()}`,
      html: `
<html>
  <body>
    <div style="font-size:16px; font-weight:500;">
      <p><strong>Name:</strong> ${name.trim()}</p>
      <p><strong>Email:</strong> ${email.trim()}</p>
      <p><strong>Company:</strong> ${company?.trim() || "Not provided"}</p>
      <p><strong>Website:</strong> ${website?.trim() || "Not provided"}</p>
      <p><strong>Services:</strong> ${services.join(", ")}</p>
      <p><strong>Budget:</strong> ${budget?.trim() || "Not specified"}</p>
      <p><strong>Brief:</strong><br/>${brief.trim()}</p>
    </div>
  </body>
</html>
`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Start a project email error:", error);
    return Response.json({ success: false, error: "Could not send your brief. Please try again." }, { status: 500 });
  }
}
