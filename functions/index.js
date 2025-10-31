const functions = require('firebase-functions/v2');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendContactEmail = functions.https.onRequest({
  cors: true,
  secrets: ['RECIPIENT_EMAIL', 'SMTP_USER', 'SMTP_PASS', 'SMTP_HOST', 'SMTP_PORT']
}, async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'username@gmail.com';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = process.env.SMTP_PORT || 587;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px -20px;">
            <h2 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h2>
          </div>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; color: #374151;"><strong style="color: #1f2937;">Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0; color: #374151;"><strong style="color: #1f2937;">Email:</strong> ${email}</p>
            <p style="margin: 0; color: #374151;"><strong style="color: #1f2937;">Subject:</strong> ${subject}</p>
          </div>

          <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; text-align: center;">
            <p style="margin: 0;">This email was sent from your portfolio contact form</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message
    });
  }
});
