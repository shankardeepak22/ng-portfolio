# 🚀 Angular Portfolio

A modern, responsive personal portfolio website built with Angular 19+ featuring signals-based state management, standalone components, and modern Angular best practices.

## ✨ Features

- 🎯 **Modern Angular 19+** - Built with the latest Angular features including signals and standalone components
- 🎨 **Responsive Design** - Fully responsive layout that works across all devices
- ⚡ **Performance Optimized** - OnPush change detection strategy for optimal performance
- 🔥 **Firebase Hosting** - Configured for easy deployment to Firebase
- 🧪 **Jest Testing** - Comprehensive test coverage with Jest
- 📱 **Sections Include**:
  - Hero/Landing section
  - About me
  - Skills & Technologies
  - Work Experience
  - Education
  - Projects showcase
  - Contact information

## 🛠️ Tech Stack

- **Framework**: Angular 19.2.0
- **Language**: TypeScript 5.7
- **State Management**: Angular Signals
- **Testing**: Jest 29
- **Hosting**: Firebase
- **Styling**: CSS3
- **Build Tool**: Angular CLI 19.2.19

## 📋 Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Angular CLI 19+

```bash
npm install -g @angular/cli
```

## 🚀 Getting Started

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

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server at http://localhost:4200 |
| `npm run build` | Build the project for production |
| `npm test` | Run unit tests with Jest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |
| `npm run watch` | Build and watch for changes (development mode) |

## 🏗️ Project Structure

```
ng-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── education/
│   │   │   ├── experience/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── projects/
│   │   │   └── skills/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── .junie/
│   └── guidelines.md
├── firebase.json
├── jest.config.js
└── package.json
```

## 🧪 Testing

This project uses Jest for unit testing. Tests are configured with Angular testing utilities.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory.

## 🚢 Deployment

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

## 🎨 Development Guidelines

This project follows modern Angular best practices:

- ✅ Standalone components (no NgModules)
- ✅ Signals for state management
- ✅ OnPush change detection strategy
- ✅ Modern control flow (`@if`, `@for`, `@switch`)
- ✅ `input()` and `output()` functions instead of decorators
- ✅ Strict TypeScript configuration
- ✅ Reactive programming with RxJS

See [.junie/guidelines.md](.junie/guidelines.md) for detailed coding standards.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Deepak Shankar**

- GitHub: [@shankardeepak22](https://github.com/shankardeepak22)

---

Built with ❤️ using Angular
