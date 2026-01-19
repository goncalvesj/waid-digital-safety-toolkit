# Digital Safety Toolkit - Hackathon Project

> **⚠️ IMPORTANT DISCLAIMER**
> 
> This project was created as part of a hackathon and is **NOT affiliated with, endorsed by, or part of the official Woman's Aid Ireland website or organization**. This is an independent prototype developed for educational and demonstration purposes only.
> 
> **For official resources and support, please visit the official Woman's Aid Ireland website.**

## 🎯 Project Overview

A privacy-first digital safety resource designed to help women navigate technology safety concerns during crisis moments. This prototype was built during a hackathon to explore how AI and modern web technologies can provide immediate, discreet guidance without storing any data or leaving digital traces.

## 🌟 Key Features

### 🤖 AI-Powered Safety Assistant
- Real-time chat interface with Azure AI Agent providing personalized digital safety guidance
- Trauma-informed, empathetic responses using a comprehensive knowledge base
- Contextual support tailored to specific situations

### 🛡️ Privacy-First Architecture
- **Zero data persistence** - no information is stored on the device
- All state management happens in memory only
- No tracking, analytics, or external communications (except AI integration)
- Complete privacy with no digital traces left behind

### 🚨 Quick Exit Button
- Always-visible emergency exit button
- Instantly redirects to BBC using `location.replace()` with no browser history
- Critical safety feature for users in monitoring situations

### 📋 Interactive Decision Trees
- Step-by-step guided questionnaires for different safety scenarios
- Provides structured support for various digital safety concerns
- Actionable outcomes and recommendations

### ✅ Digital Safety Checklists
- Interactive checklists for securing digital accounts and devices
- Progress tracking (memory only)
- Easy-to-follow steps with clear guidance

## 🛠️ Technology Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **UI Components**: Radix UI + shadcn/ui
- **Styling**: Tailwind CSS 4
- **AI Integration**: Azure AI Agent with comprehensive knowledge base
- **Icons**: Heroicons, Phosphor Icons, Lucide React
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/goncalvesj/digital-safety-toolk.git

# Navigate to the project directory
cd digital-safety-toolk

# Install dependencies
npm install

# Set up environment variables (see Configuration section below)
cp .env.example .env.local
# Edit .env.local with your Azure OpenAI credentials

# Run the development server
npm run dev
```

### Configuration

To enable the AI chat assistant, you need to configure Azure OpenAI:

1. Copy `.env.example` to `.env.local`
2. Fill in your Azure OpenAI credentials (see [AZURE_AI_SETUP.md](AZURE_AI_SETUP.md) for details)
3. **Never commit `.env.local`** - it contains sensitive API keys

The app will work without Azure OpenAI configured, but the chat interface will use offline mode with pattern-based responses.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Philosophy

### Experience Qualities
1. **Safe** - Zero data persistence ensures no evidence of use remains on device
2. **Accessible** - Clear, simple language with immediate actionable guidance
3. **Discreet** - Quick exit functionality and minimal visual footprint for safety

### Color Palette
- **Primary**: Deep Teal - Communicates trust, safety, and professionalism
- **Secondary**: Soft Gray for backgrounds, Light Teal for accents
- **Accent**: Warm Orange for positive actions and progress indicators
- **Quick Exit**: Alert Red for emergency exit functionality

### Typography
- **Font Family**: Inter - Chosen for excellent readability and accessibility
- Clear typographic hierarchy for easy scanning during stressful situations

## 🔒 Privacy & Security

This application is designed with privacy as the top priority:
- No cookies or local storage
- No user tracking or analytics
- No server-side data collection
- All interactions are ephemeral
- Browser refresh completely resets all state

## ⚠️ Limitations & Disclaimer

This is a **hackathon prototype** and should not be considered production-ready. It is:
- Not a replacement for professional support services
- Not affiliated with any official organization
- Not actively maintained or supported
- For demonstration and educational purposes only

**If you are experiencing domestic abuse or need immediate help, please contact:**
- Woman's Aid Ireland: 1800 341 900 (24/7 National Freephone Helpline)
- Emergency Services: 999 or 112

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.

## 🙏 Acknowledgments

This hackathon project was inspired by the important work of digital safety advocates and organizations supporting survivors of domestic abuse. While this is not an official project, it represents an exploration of how technology might support people in crisis situations.
