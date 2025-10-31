# Firebase Cloud Functions - Email Setup

This directory contains Firebase Cloud Functions for securely handling email submissions from your portfolio contact form.

## Security Features

✅ **Email address is stored server-side only** - Never exposed to client code  
✅ **Not visible in DevTools or source code inspection**  
✅ **Secure SMTP credentials stored in Firebase environment variables**  
✅ **CORS protection enabled**  
✅ **Input validation and sanitization**

## Setup Instructions

### 1. Install Dependencies

```bash
cd functions
npm install
```

### 2. Configure Gmail App Password

To send emails through Gmail securely:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → 2-Step Verification → App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password (you'll need it in the next step)

### 3. Set Firebase Environment Variables

Run these commands from the **root directory** of your project:

```bash
# Set your recipient email (this is where contact form submissions will be sent)
firebase functions:config:set email.recipient="username@gmail.com"

# Set SMTP credentials (use your Gmail and the app password from step 2)
firebase functions:config:set smtp.user="your-gmail@gmail.com"
firebase functions:config:set smtp.pass="your-16-character-app-password"
firebase functions:config:set smtp.host="smtp.gmail.com"
firebase functions:config:set smtp.port="587"
```

**Important Notes:**
- Replace `your-gmail@gmail.com` with your actual Gmail address
- Replace `your-16-character-app-password` with the app password from step 2
- Keep the recipient email as `username@gmail.com` or change it to your preferred email

### 4. Test Locally (Optional)

```bash
# Download the config to local environment
firebase functions:config:get > functions/.runtimeconfig.json

# Start the Firebase emulator
npm run serve

# The function will be available at:
# http://127.0.0.1:5001/ngportfolio-4f8ec/us-central1/sendContactEmail
```

### 5. Deploy to Firebase

From the **root directory**:

```bash
# Deploy only functions
firebase deploy --only functions

# Or deploy everything (hosting + functions)
firebase deploy
```

After deployment, your function will be available at:
```
https://us-central1-ngportfolio-4f8ec.cloudfunctions.net/sendContactEmail
```

## Alternative Email Providers

If you don't want to use Gmail, you can use other SMTP providers:

### SendGrid
```bash
firebase functions:config:set smtp.host="smtp.sendgrid.net"
firebase functions:config:set smtp.port="587"
firebase functions:config:set smtp.user="apikey"
firebase functions:config:set smtp.pass="your-sendgrid-api-key"
```

### Mailgun
```bash
firebase functions:config:set smtp.host="smtp.mailgun.org"
firebase functions:config:set smtp.port="587"
firebase functions:config:set smtp.user="your-mailgun-smtp-username"
firebase functions:config:set smtp.pass="your-mailgun-smtp-password"
```

### AWS SES
```bash
firebase functions:config:set smtp.host="email-smtp.us-east-1.amazonaws.com"
firebase functions:config:set smtp.port="587"
firebase functions:config:set smtp.user="your-ses-smtp-username"
firebase functions:config:set smtp.pass="your-ses-smtp-password"
```

## Troubleshooting

### Error: "Missing environment variables"
- Make sure you've set all the required config variables using `firebase functions:config:set`
- Run `firebase functions:config:get` to verify they're set correctly

### Error: "Invalid login"
- Double-check your Gmail app password (not your regular Gmail password)
- Ensure 2-Factor Authentication is enabled on your Google account

### Emails not being received
- Check your spam folder
- Verify the recipient email is correct: `firebase functions:config:get`
- Check Firebase Functions logs: `firebase functions:log`

### CORS errors
- The function includes CORS middleware by default
- If deploying to a custom domain, you may need to update the CORS origin in `index.js`

## View Logs

```bash
# View recent logs
firebase functions:log

# Stream logs in real-time
firebase functions:log --only sendContactEmail
```

## Security Best Practices

✅ Never commit `.env` or `.runtimeconfig.json` files to git  
✅ Use Firebase environment variables for all secrets  
✅ Regularly rotate your SMTP passwords  
✅ Monitor your function usage in Firebase Console  
✅ Set up budget alerts to prevent unexpected costs

## Cost Estimation

Firebase Cloud Functions pricing:
- First 2,000,000 invocations per month: **FREE**
- After that: $0.40 per million invocations

For a portfolio site, you'll likely stay well within the free tier!

## Support

For issues or questions:
- Firebase Functions Docs: https://firebase.google.com/docs/functions
- Nodemailer Docs: https://nodemailer.com/
