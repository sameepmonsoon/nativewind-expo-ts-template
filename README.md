# NativeWind + Expo + TypeScript Starter Template

🚀 A starter template for building React Native apps with Expo, TypeScript, and NativeWind (Tailwind CSS for React Native).

## Features

- ⚡ **Expo** for cross-platform development
- 🎨 **NativeWind** (Tailwind CSS for React Native) for styling
- 🏗 **TypeScript** for type-safe code
- 📱 **React Navigation** (Stack Navigator) pre-configured
- 🔄 **Safe Area Context** for proper screen rendering
- 🛠 **ESLint & Prettier** for code quality and formatting

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- Expo CLI installed globally (`npm install -g expo-cli`)
- Yarn or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sameepmonsoon/nativewind-expo-ts-template.git
   cd nativewind-expo-ts-template

2. **Install dependencies


yarn install
# or
npm install

3. **Start the development server

yarn start
# or
npm start


4. **Run on your device

Scan the QR code with the Expo Go app (Android/iOS)

Or run on an emulator (a for Android, i for iOS)

Customizing NativeWind
Edit tailwind.config.js to customize your design system:


```bash
   module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
    },
  },
  plugins: [],
};
