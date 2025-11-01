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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-spacing: 0; border-collapse: collapse; padding: 40px 20px;">
    <tr>
      <td style="text-align: center;">

        <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; border-spacing: 0; border-collapse: collapse; background: #ffffff; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">

          <tr>
            <td style="padding: 40px 40px 30px 40px; border-bottom: 1px solid #e5e5e5;">
              <h1 style="color: #1a1a1a; font-size: 24px; font-weight: 600; margin: 0 0 8px 0; letter-spacing: -0.5px;">New Contact Message</h1>
              <p style="color: #737373; font-size: 14px; margin: 0;">Portfolio Contact Form Submission</p>
            </td>
          </tr>

          <tr>
            <td style="padding: 30px 40px;">
              <table role="presentation" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0 0 4px 0; color: #737373; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
                    <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 500;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0 0 4px 0; color: #737373; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                    <p style="margin: 0;">
                      <a href="mailto:${email}" style="color: #1a1a1a; font-size: 16px; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0 0 4px 0; color: #737373; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                    <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 500;">${subject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 10px; border-top: 1px solid #e5e5e5;">
                    <p style="margin: 0 0 12px 0; color: #737373; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; padding-top: 20px;">Message</p>
                    <p style="color: #1a1a1a; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding: 30px 40px; background-color: #fafafa; border-top: 1px solid #e5e5e5;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #1a1a1a; color: #ffffff; font-size: 14px; font-weight: 500; text-decoration: none; padding: 12px 24px; border-radius: 4px;">Reply to ${name}</a>
            </td>
          </tr>

          <tr>
            <td style="padding: 20px 40px; background-color: #fafafa; text-align: center; border-top: 1px solid #e5e5e5;">
              <p style="color: #a3a3a3; font-size: 12px; margin: 0;">
                ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
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
