# Pacely - Running Companion App

Pacely is a comprehensive running and workout tracking app built with React Native and Expo. It helps runners track their workouts, set and achieve goals, and connect with a community of fellow runners.

## Features

- 🏃‍♂️ Real-time run tracking with GPS
- 🎯 Personal goal setting and tracking
- 📊 Detailed statistics and progress visualization
- 👥 Community features for sharing workouts
- 🏆 Achievement system and streaks
- ⚙️ Customizable settings and preferences

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pacely.git
cd pacely
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Run on your device or simulator:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan the QR code with Expo Go app on your physical device

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── navigation/     # Navigation configuration
  ├── screens/        # Screen components
  │   ├── auth/      # Authentication screens
  │   └── main/      # Main app screens
  ├── services/       # API and service integrations
  ├── store/          # State management
  ├── types/          # TypeScript type definitions
  └── utils/          # Utility functions
```

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- Redux Toolkit
- Expo Location
- React Native Maps
- Firebase (for authentication and data storage)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the React Native and Expo communities
