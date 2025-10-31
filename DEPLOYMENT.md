# Deployment Instructions for Contact Form Email Functionality

## Important: Firebase Billing Requirement

⚠️ **Cloud Functions requires Firebase to be on the Blaze (pay-as-you-go) plan.**

The error you're seeing is likely because your Firebase project is on the Spark (free) plan.

### Enable Billing (Blaze Plan)

1. Go to Firebase Console: https://console.firebase.google.com/
2. Select your project: `NgPortfolio`
3. Click on **Upgrade** in the left sidebar (or the upgrade button)
4. Select the **Blaze Plan** (pay-as-you-go)
5. Add a payment method

**Don't worry about costs!**
- First 2,000,000 function invocations per month are FREE
- Your portfolio will likely stay well within the free tier
- You can set up budget alerts to monitor usage

## Setup Steps (After Enabling Billing)

### 1. Get Gmail App Password

1. Go to: https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already enabled)
3. Go to: https://myaccount.google.com/apppasswords
4. Create a new app password:
   - Select app: "Mail"
   - Select device: "Other" → "Portfolio Website"
5. Copy the 16-character password (no spaces)

### 2. Set Environment Variables (Cloud Functions v2)

Firebase Functions v2 uses a different approach for environment variables. Run these commands from your project root:

```bash
# Install Firebase CLI if you haven't
npm install -g firebase-tools

# Login to Firebase
firebase login

# Set environment variables using Secret Manager
firebase functions:secrets:set RECIPIENT_EMAIL
# When prompted, enter: username@gmail.com

firebase functions:secrets:set SMTP_USER
# When prompted, enter: your-gmail@gmail.com

firebase functions:secrets:set SMTP_PASS
# When prompted, enter: your-16-character-app-password

firebase functions:secrets:set SMTP_HOST
# When prompted, enter: smtp.gmail.com

firebase functions:secrets:set SMTP_PORT
# When prompted, enter: 587
```

### Alternative: Using .env file for local development

Create `functions/.env` (already gitignored):
```env
RECIPIENT_EMAIL=username@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
```

### 3. Update functions/index.js to use secrets

Update the function definition to access secrets:

```javascript
exports.sendContactEmail = functions.https.onRequest({
  cors: true,
  secrets: ['RECIPIENT_EMAIL', 'SMTP_USER', 'SMTP_PASS', 'SMTP_HOST', 'SMTP_PORT']
}, async (req, res) => {
  // ... rest of code
});
```

### 4. Deploy

```bash
# From project root
firebase deploy --only functions

# Or deploy everything
firebase deploy
```

### 5. Update Frontend URLs

After successful deployment, note the function URL and update:

**src/environments/environment.prod.ts:**
```typescript
export const environment = {
  production: true,
  cloudFunctionUrl: 'https://sendcontactemail-<random-id>-uc.a.run.app'
  // The URL will be shown after deployment
};
```

## Alternative: Simple SendGrid Integration (Recommended for Beginners)

If you want to avoid Firebase Functions complexity, use SendGrid's free tier:

1. Sign up: https://sendgrid.com/free/
2. Get API key
3. Use SendGrid's client-side API directly from Angular
4. 100 emails/day free forever

Let me know if you want me to set this up instead!

## Troubleshooting

### "Failed to create function" Error
- **Cause**: Project not on Blaze plan
- **Fix**: Upgrade to Blaze plan in Firebase Console

### "Missing secrets" Error  
- **Cause**: Environment variables not set
- **Fix**: Run the `firebase functions:secrets:set` commands above

### "Authentication failed" (when sending email)
- **Cause**: Wrong Gmail app password
- **Fix**: Generate a new app password and update the secret

### Check Logs
```bash
firebase functions:log --only sendContactEmail
```

## Cost Monitoring

Set up budget alerts:
1. Go to: https://console.cloud.google.com/billing
2. Click "Budgets & alerts"
3. Create a budget alert for $5-10/month
4. You'll get notified if costs exceed this (unlikely for a portfolio)

## Questions?

The main blocker is the Blaze plan requirement. Once that's enabled, deployment should work smoothly!
