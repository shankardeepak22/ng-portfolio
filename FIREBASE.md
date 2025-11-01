# Firebase Configuration & Deployment Guide

Complete guide for Firebase Hosting and Cloud Functions setup for the Angular Portfolio project.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Firebase Configuration](#firebase-configuration)
- [Cloud Functions Setup](#cloud-functions-setup)
- [Environment Configuration](#environment-configuration)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

**Firebase Project:** `ngportfolio-4f8ec`

**Services Used:**
- **Firebase Hosting** - Hosts the Angular application
- **Cloud Functions v2** - Handles contact form email functionality
- **Secret Manager** - Stores sensitive credentials securely

---

## ⚙️ Firebase Configuration

### Project Files

#### `.firebaserc`
Defines the Firebase project identifier:
```json
{
  "projects": {
    "default": "ngportfolio-4f8ec"
  }
}
```

#### `firebase.json`
Configures hosting and functions:
```json
{
  "functions": {
    "source": "functions"
  },
  "hosting": {
    "public": "dist/portfolio/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

**Key Points:**
- Functions source directory: `functions/`
- Hosting directory: `dist/portfolio/browser` (Angular build output)
- SPA routing: All routes redirect to `index.html`

---

## 🔧 Cloud Functions Setup

### Function: `sendContactEmail`

**Purpose:** Processes contact form submissions and sends formatted emails via SMTP

**Runtime:** Node.js 20  
**Type:** HTTP Request (Cloud Functions v2)  
**CORS:** Enabled  
**URL:** `https://sendcontactemail-fuyv2qqaoq-uc.a.run.app`

### Dependencies

```json
{
  "firebase-admin": "^12.0.0",
  "firebase-functions": "^5.1.1",
  "nodemailer": "^6.9.0"
}
```

### Function Features

✅ Email validation  
✅ Required field validation  
✅ Professional HTML email template  
✅ Reply-to functionality  
✅ Secure credentials via Secret Manager  

---

## 🔐 Environment Configuration

### Production Environment

**File:** `src/environments/environment.prod.ts`
```typescript
export const environment = {
  production: true,
  cloudFunctionUrl: 'https://sendcontactemail-fuyv2qqaoq-uc.a.run.app'
};
```

### Development Environment

**File:** `src/environments/environment.ts`
```typescript
export const environment = {
  production: false,
  cloudFunctionUrl: 'http://127.0.0.1:5001/ngportfolio-4f8ec/us-central1/sendContactEmail'
};
```

### Required Secrets (Cloud Functions v2)

The following secrets must be configured in Google Cloud Secret Manager:

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `RECIPIENT_EMAIL` | Email address that receives contact form submissions | `username@gmail.com` |
| `SMTP_USER` | Gmail account for sending emails | `your-gmail@gmail.com` |
| `SMTP_PASS` | Gmail App Password (16 characters) | `abcd efgh ijkl mnop` |
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |

---

## 📧 Setting Up Gmail App Password

### Prerequisites
- Gmail account with 2-Step Verification enabled
- Firebase project on Blaze (pay-as-you-go) plan

### Steps

1. **Enable 2-Step Verification**
   - Visit: https://myaccount.google.com/security
   - Enable **2-Step Verification** if not already enabled

2. **Create App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: **Mail**
   - Select device: **Other** → Enter "Portfolio Website"
   - Copy the 16-character password (remove spaces)

3. **Set Firebase Secrets**
   
   Run these commands from your project root:

   ```bash
   # Install Firebase CLI (if not already installed)
   npm install -g firebase-tools

   # Login to Firebase
   firebase login

   # Set secrets using Secret Manager
   firebase functions:secrets:set RECIPIENT_EMAIL
   # Enter: username@gmail.com

   firebase functions:secrets:set SMTP_USER
   # Enter: your-gmail@gmail.com

   firebase functions:secrets:set SMTP_PASS
   # Enter: your-16-character-app-password

   firebase functions:secrets:set SMTP_HOST
   # Enter: smtp.gmail.com

   firebase functions:secrets:set SMTP_PORT
   # Enter: 587
   ```

### Local Development Setup

For local testing with Firebase emulators, create a `.env` file:

**File:** `functions/.env` (already in `.gitignore`)
```env
RECIPIENT_EMAIL=username@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
```

---

## 🧪 Local Development with Firebase Emulators

Firebase Emulators allow you to develop and test locally without deploying to production or incurring costs.

### Benefits

✅ Test Cloud Functions locally  
✅ No costs for development  
✅ Faster iteration cycles  
✅ Safe testing environment  
✅ Works offline  

### Installation

Firebase emulators are included with Firebase CLI. Install Java if not already installed (required for emulators):

```bash
# macOS
brew install openjdk@11

# Ubuntu/Debian
sudo apt-get install default-jre
```

### Initialize Emulators

```bash
# Initialize emulator configuration (one-time setup)
firebase init emulators
```

Select the emulators you want to use:
- ✅ Functions Emulator
- ✅ Hosting Emulator
- ⬜ Authentication Emulator (optional)
- ⬜ Firestore Emulator (optional)

This creates configuration in your `firebase.json` file.

### Running Emulators

#### Start All Emulators

```bash
# Start hosting and functions emulators
firebase emulators:start
```

This will start:
- **Hosting**: `http://localhost:5000`
- **Functions**: `http://localhost:5001`
- **Emulator UI**: `http://localhost:4000`

#### Start Specific Emulators

```bash
# Only functions
firebase emulators:start --only functions

# Only hosting
firebase emulators:start --only hosting

# Functions and hosting
firebase emulators:start --only functions,hosting
```

### Development Workflow

#### 1. Set Up Local Environment Variables

Ensure your `functions/.env` file exists with credentials:

```env
RECIPIENT_EMAIL=username@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
```

#### 2. Start Angular Dev Server

In one terminal:

```bash
npm start
```

This runs Angular at `http://localhost:4200`

#### 3. Start Firebase Emulators

In another terminal:

```bash
firebase emulators:start --only functions
```

Functions will be available at `http://localhost:5001`

#### 4. Configure Environment

The development environment (`src/environments/environment.ts`) is already configured to use local emulators:

```typescript
export const environment = {
  production: false,
  cloudFunctionUrl: 'http://127.0.0.1:5001/ngportfolio-4f8ec/us-central1/sendContactEmail'
};
```

#### 5. Test Contact Form

Navigate to `http://localhost:4200`, fill out the contact form, and submit. The email will be sent via your local function emulator.

### Emulator UI

The Emulator UI provides a web interface to monitor and debug:

**Access at:** `http://localhost:4000`

**Features:**
- View function invocations and logs
- Inspect function responses
- Monitor performance
- Test different scenarios

### Testing Functions Directly

You can also test functions with curl or Postman:

```bash
curl -X POST http://127.0.0.1:5001/ngportfolio-4f8ec/us-central1/sendContactEmail \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### Emulator Logs

View detailed function logs in the terminal where emulators are running:

```bash
# Logs appear automatically in the emulator terminal
# Look for:
# - Function invocations
# - console.log() output
# - Error messages
# - Email sending status
```

### Stopping Emulators

Press `Ctrl + C` in the terminal running emulators.

### Common Emulator Issues

#### ❌ Port Already in Use

**Error:** `Port 5001 is already in use`

**Solution:**
```bash
# Find and kill process using the port
lsof -ti:5001 | xargs kill -9

# Or use different ports
firebase emulators:start --only functions --port=5002
```

#### ❌ Java Not Found

**Error:** `Java is not installed`

**Solution:**
```bash
# Install Java
brew install openjdk@11  # macOS
sudo apt-get install default-jre  # Linux
```

#### ❌ Functions Not Reloading

**Solution:** Restart emulators when you modify `functions/index.js`

```bash
# Stop emulators (Ctrl+C)
# Start again
firebase emulators:start --only functions
```

---

## 🚀 Deployment

### Quick Deploy Commands

```bash
# Deploy everything (hosting + functions)
firebase deploy

# Deploy only hosting
firebase deploy --only hosting

# Deploy only functions
firebase deploy --only functions
```

### Complete Deployment Process

#### 1. Build the Angular Application

```bash
# Production build
npm run build
```

This creates optimized files in `dist/portfolio/browser/`

#### 2. Test Locally (Optional)

```bash
# Start Firebase emulators
firebase emulators:start

# Or test functions only
cd functions
npm run serve
```

#### 3. Deploy to Firebase

```bash
# Login (first time only)
firebase login

# Deploy
firebase deploy
```

#### 4. Verify Deployment

After deployment completes:
- **Hosting URL:** Check console output for hosting URL
- **Function URL:** Verify at `https://sendcontactemail-fuyv2qqaoq-uc.a.run.app`
- **Test:** Submit a test contact form on your live site

---

## 🛠️ Troubleshooting

### Common Issues

#### ❌ "Failed to create function" Error

**Cause:** Firebase project not on Blaze plan  
**Solution:** Upgrade to Blaze (pay-as-you-go) plan in Firebase Console  
- Functions require Blaze plan for outbound network requests

#### ❌ "Missing secrets" Error

**Cause:** Environment variables not configured  
**Solution:** Run the secret configuration commands:
```bash
firebase functions:secrets:set RECIPIENT_EMAIL
firebase functions:secrets:set SMTP_USER
firebase functions:secrets:set SMTP_PASS
firebase functions:secrets:set SMTP_HOST
firebase functions:secrets:set SMTP_PORT
```

#### ❌ "Authentication failed" (Email sending error)

**Cause:** Incorrect Gmail App Password  
**Solution:**
1. Generate a new App Password at https://myaccount.google.com/apppasswords
2. Update the secret:
   ```bash
   firebase functions:secrets:set SMTP_PASS
   ```

#### ❌ Function URL not working after deployment

**Cause:** Function URL might have changed  
**Solution:**
1. Get the new function URL from deployment output
2. Update `src/environments/environment.prod.ts`
3. Rebuild and redeploy hosting:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

### Viewing Logs

```bash
# View all function logs
firebase functions:log

# View specific function logs
firebase functions:log --only sendContactEmail

# Follow logs in real-time
firebase functions:log --only sendContactEmail --tail
```

### Testing Contact Form Locally

```bash
# Start emulators
firebase emulators:start

# In another terminal, start Angular dev server
npm start
```

Navigate to `http://localhost:4200` and test the contact form. Emails will be sent through the local emulator.

---

## 📊 Monitoring & Analytics

### Firebase Console

Monitor your deployment at: https://console.firebase.google.com/project/ngportfolio-4f8ec

**Key Sections:**
- **Hosting** - View deployment history and usage
- **Functions** - Monitor function invocations, errors, and performance
- **Authentication** - (If added in future)

### Function Metrics

Track in Firebase Console → Functions:
- Invocation count
- Error rate
- Execution time
- Memory usage

---

## 🔄 Updating the Project

### Update Angular Application

```bash
# Make changes to Angular code
# ...

# Build
npm run build

# Deploy hosting only
firebase deploy --only hosting
```

### Update Cloud Function

```bash
# Make changes to functions/index.js
# ...

# Deploy functions only
firebase deploy --only functions
```

### Update Function Secrets

```bash
# Update specific secret
firebase functions:secrets:set SMTP_PASS

# Redeploy function to use new secret
firebase deploy --only functions
```

---

## 🌐 Alternative: SendGrid Integration

If you want to avoid Firebase Functions complexity, consider SendGrid's free tier:

**Benefits:**
- ✅ 100 emails/day free forever
- ✅ Simpler setup
- ✅ No Cloud Functions needed
- ✅ Client-side API integration

**Setup:**
1. Sign up: https://sendgrid.com/free/
2. Get API key
3. Use SendGrid's Web API directly from Angular
4. No backend needed

---

## 📝 Additional Notes

### Cost Considerations

**Firebase Hosting:** Free tier includes:
- 10 GB storage
- 360 MB/day data transfer

**Cloud Functions (Blaze Plan):** Pay-as-you-go
- 2 million invocations/month free
- 400,000 GB-seconds compute time free
- 200,000 GHz-seconds compute time free

**Secret Manager:** 
- 6 secrets free
- Additional secrets: $0.06 per secret per month

### Security Best Practices

✅ Never commit `.env` files (already in `.gitignore`)  
✅ Use Secret Manager for production credentials  
✅ Rotate App Passwords periodically  
✅ Monitor function logs for suspicious activity  
✅ Implement rate limiting if needed  

---

## 📞 Support

**Firebase Documentation:** https://firebase.google.com/docs  
**Angular Firebase:** https://github.com/angular/angularfire  
**Nodemailer:** https://nodemailer.com/about/  

**Project Repository:** https://github.com/shankardeepak22/ng-portfolio  
**Issues:** https://github.com/shankardeepak22/ng-portfolio/issues
