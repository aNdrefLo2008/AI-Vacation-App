/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the content paths to include all relevant files in your app
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",       // Ensure all app files (including screens) are included
    "./components/**/*.{js,jsx,ts,tsx}", // Include components folder
    "./screens/**/*.{js,jsx,ts,tsx}",    // Include screens folder for relevant Tailwind class parsing
  ],
  presets: [require("nativewind/preset")], // NativeWind preset to support Tailwind in React Native
  theme: {
    extend: {},
  },
  plugins: [],
};
