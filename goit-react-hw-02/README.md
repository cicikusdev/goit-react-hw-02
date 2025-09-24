# Feedback Widget - Sip Happens Café

A React application for collecting customer feedback with statistics and local storage persistence.

## Features

- **Feedback Collection**: Users can provide Good, Neutral, or Bad feedback
- **Statistics Display**: Shows count for each feedback type, total count, and positive percentage
- **Local Storage**: Feedback data persists across browser sessions
- **Responsive Design**: Clean, modern UI with CSS modules
- **Conditional Rendering**: Shows appropriate components based on feedback state

## Components

- **App**: Main component managing state and localStorage
- **Options**: Feedback buttons and reset functionality
- **Feedback**: Statistics display
- **Notification**: Empty state message

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Tech Stack

- React 19
- Vite
- CSS Modules
- Prettier
- ESLint