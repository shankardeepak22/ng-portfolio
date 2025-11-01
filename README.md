# Angular Portfolio

Personal portfolio website built with Angular 19, TypeScript, and Firebase.

[![Angular](https://img.shields.io/badge/Angular-19.2-DD0031?logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?logo=firebase)](https://firebase.google.com/)
[![Jest](https://img.shields.io/badge/Jest-29-C21325?logo=jest)](https://jestjs.io/)

---

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Contributing](#contributing)

---

## About

Portfolio website showcasing my work, skills, and experience. Built using Angular 19 with modern features like signals and standalone components. The contact form uses Firebase Cloud Functions to send emails via SMTP.

**What's included:**
- Responsive single-page application
- Contact form with email notifications
- Automated CI/CD via GitHub Actions
- Unit tests with Jest
- Deployed on Firebase Hosting

**Portfolio sections:**
- Hero/Landing page
- About me
- Skills & Technologies
- Work Experience
- Education
- Projects
- Contact form

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | Angular | 19.2.0 |
| **Language** | TypeScript | 5.7 |
| **State Management** | Angular Signals | - |
| **Testing** | Jest | 29 |
| **Hosting** | Firebase Hosting | - |
| **Backend** | Firebase Cloud Functions v2 | - |
| **Email** | Nodemailer | 6.9.0 |
| **Styling** | CSS3 | - |
| **Build Tool** | Angular CLI | 19.2.19 |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (LTS version recommended)
- **npm** or **yarn**
- **Angular CLI** 19+

```bash
npm install -g @angular/cli
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shankardeepak22/ng-portfolio.git
   cd ng-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   
   Navigate to `http://localhost:4200/`

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server at `http://localhost:4200` |
| `npm run build` | Production build to `dist/portfolio/browser` |
| `npm test` | Run Jest unit tests |
| `npm run test:watch` | Run tests in watch mode for development |
| `npm run test:coverage` | Generate test coverage report in `coverage/` |
| `npm run watch` | Build and watch for changes (development mode) |

### Development Guidelines

This project follows modern Angular best practices:

- ✅ **Standalone components** (no NgModules)
- ✅ **Angular Signals** for reactive state management
- ✅ **OnPush change detection** for performance
- ✅ **Modern control flow** (`@if`, `@for`, `@switch`)
- ✅ **Modern APIs** (`input()`, `output()` instead of decorators)
- ✅ **Strict TypeScript** configuration
- ✅ **RxJS** for reactive programming patterns

📖 See [.junie/guidelines.md](.junie/guidelines.md) for detailed coding standards.

---

## 🧪 Testing

This project uses **Jest** for fast, reliable unit testing with Angular testing utilities.

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

**Coverage reports** are generated in the `coverage/` directory.

**Test Configuration:**
- Jest config: [jest.config.js](jest.config.js)
- Test setup: [setup-jest.ts](setup-jest.ts)

---

## 🚢 Deployment

This project is deployed to **Firebase Hosting** with **Cloud Functions** for the contact form.

### Quick Deploy

```bash
# Build and deploy everything
npm run build
firebase deploy

# Deploy only hosting
firebase deploy --only hosting

# Deploy only functions
firebase deploy --only functions
```

### Complete Setup Guide

📖 **See [FIREBASE.md](FIREBASE.md) for:**
- Complete Firebase configuration
- Cloud Functions setup
- Email credentials configuration
- Environment variables
- Firebase emulators for local development
- Troubleshooting guide

---

## 🔄 CI/CD with GitHub Actions

This project uses GitHub Actions for automated deployment to Firebase Hosting.

### Workflows

#### 1. Deploy on Merge to Main
**File:** `.github/workflows/firebase-hosting-merge.yml`

Automatically deploys to production when code is merged to the `main` branch.

**Triggers:** Push to `main` branch

**Steps:**
1. Checkout code
2. Install dependencies (`npm ci`)
3. Build production bundle
4. Deploy to Firebase Hosting (live channel)

#### 2. Deploy Preview on Pull Request
**File:** `.github/workflows/firebase-hosting-pull-request.yml`

Creates preview deployments for pull requests to test changes before merging.

**Triggers:** Pull request opened/updated

**Steps:**
1. Checkout code
2. Install dependencies (`npm ci`)
3. Build production bundle
4. Deploy to Firebase Hosting preview channel
5. Comment on PR with preview URL

### Required Secrets

The following GitHub secrets must be configured in your repository:

| Secret Name | Description | How to Get |
|------------|-------------|------------|
| `FIREBASE_SERVICE_ACCOUNT_NGPORTFOLIO_4F8EC` | Service account for deployment | Auto-generated by `firebase init hosting:github` |
| `GITHUB_TOKEN` | GitHub API access | Automatically provided by GitHub Actions |

### Setting Up GitHub Actions

```bash
# Initialize GitHub Actions integration (one-time setup)
firebase init hosting:github
```

This will:
1. Prompt you to select your GitHub repository
2. Ask about automatic deployment on merge
3. Create workflow files in `.github/workflows/`
4. Add the Firebase service account secret to your GitHub repository

### Viewing Deployments

- **Production:** Every push to `main` creates a new deployment
- **Preview:** Every PR gets a unique preview URL
- **History:** View all deployments in [Firebase Console](https://console.firebase.google.com/project/ngportfolio-4f8ec/hosting)

### Manual Deployment

You can still deploy manually if needed:

```bash
firebase deploy
```

---

## 🏗️ Project Structure

```
ng-portfolio/
├── src/
│   ├── app/
│   │   ├── components/          # Standalone components
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── education/
│   │   │   ├── experience/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── projects/
│   │   │   └── skills/
│   │   ├── app.component.ts     # Root component
│   │   ├── app.config.ts        # App configuration
│   │   └── app.routes.ts        # Route definitions
│   ├── environments/
│   │   ├── environment.ts       # Development config
│   │   └── environment.prod.ts  # Production config
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── functions/                   # Firebase Cloud Functions
│   ├── index.js                 # Contact email function
│   ├── package.json
│   └── .env                     # Local secrets (gitignored)
├── .junie/
│   └── guidelines.md            # Development guidelines
├── firebase.json                # Firebase configuration
├── .firebaserc                  # Firebase project ID
├── jest.config.js               # Jest configuration
├── setup-jest.ts                # Jest setup file
└── package.json
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [FIREBASE.md](FIREBASE.md) | Complete Firebase setup, Cloud Functions, and deployment guide |
| [.junie/guidelines.md](.junie/guidelines.md) | Angular coding standards and best practices |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow the [Angular Style Guide](https://angular.io/guide/styleguide)
- Run tests before submitting: `npm test`
- Ensure TypeScript compiles without errors: `npm run build`

---

## 👨‍💻 Author

**Deepak Shankar**

- GitHub: [@shankardeepak22](https://github.com/shankardeepak22)
- Portfolio: [Live Demo](https://ngportfolio-4f8ec.web.app)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io/)
- Hosted on [Firebase](https://firebase.google.com/)
- Tested with [Jest](https://jestjs.io/)

---

**Built with ❤️ using Angular 19**
