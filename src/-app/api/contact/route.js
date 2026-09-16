import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, service, services, message, volume } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.host,
            port: 465,
            secure: true,
            auth: {
                user: process.env.user,
                pass: process.env.pass,
            },
        });

        const clientPhone = phone && phone.trim() !== "" ? phone : "Not Provided";
        const selectedService = service || services || "Not Specified";
        const selectedVolume = volume && volume.trim() !== "" ? volume : "Not Specified";
        const clientMessage = message && message.trim() !== "" ? message : "No details provided.";

        await transporter.sendMail({
            from: '"Sitech" <noreply@sitechs.co>',
            to: "sitechspakistan@gmail.com",
            replyTo: email,
            subject: `New Project Inquiry: ${selectedService}`,
            html: `
<html>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
        </style>
    </head>
    <body>
        <div style="font-size: 16px; font-weight: 500;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Business Type:</strong> ${selectedService}</p>
            <p><strong>Monthly Appointment Volume:</strong> ${selectedVolume}</p>
            <p><strong>Phone-No:</strong> ${clientPhone}</p>
            <p><strong>Message:</strong><br/> ${clientMessage}</p>
        </div>
    </body>
</html>
`,
        });

        return Response.json({ success: true });
    }
    catch (error) {
        console.error("Nodemailer Error:", error);
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}