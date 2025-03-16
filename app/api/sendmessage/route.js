import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, topic, message } = await req.json();

    if (!name || !email || !topic || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
        }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can change this to your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL, // Your receiving email
      subject: `Portfolio Message: ${topic}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
      <h2 style="color: #333; border-bottom: 2px solid #ff6600; padding-bottom: 10px;">New Contact Form Submission</h2>
      <p style="font-size: 16px;"><strong style="color: #ff6600;">Name:</strong> ${name}</p>
      <p style="font-size: 16px;"><strong style="color: #ff6600;">Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
      <p style="font-size: 16px;"><strong style="color: #ff6600;">Topic:</strong> ${topic}</p>
      <div style="margin-top: 15px; padding: 15px; background: #fff3e0; border-radius: 5px;">
        <p style="font-size: 16px; color: #333;"><strong style="color: #ff6600;">Message:</strong></p>
        <p style="font-size: 15px; color: #555;">${message.replace(
          /\n/g,
          "<br>"
        )}</p>
      </div>
      <footer style="margin-top: 20px; text-align: center; font-size: 14px; color: #777;">
        <p>Sent from <strong>Your Website</strong></p>
      </footer>
    </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
