import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { industry, idea, ideaType, name, email } = await req.json();

    if (!name?.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email?.trim() || "")) {
      return Response.json({ success: false, error: "Invalid name or email." }, { status: 400 });
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
      subject: `New automation lead: ${industry || "unspecified industry"}`,
      html: `
<html>
  <body>
    <div style="font-size:16px; font-weight:500;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Industry:</strong> ${industry || "Not specified"}</p>
      <p><strong>Idea type:</strong> ${ideaType}</p>
      <p><strong>Idea:</strong><br/>${idea}</p>
    </div>
  </body>
</html>
`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Lead email error:", error);
    return Response.json({ success: false, error: "Could not send your request. Please try again." }, { status: 500 });
  }
}
