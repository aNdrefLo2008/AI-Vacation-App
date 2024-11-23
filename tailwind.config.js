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
    extend: {
      fontFamily: {
        sans: ["WorkSans_Regular", "sans-serif"], // Default font
        thin: ["WorkSans_Thin", "sans-serif"],
        extralight: ["WorkSans_ExtraLight", "sans-serif"],
        light: ["WorkSans_Light", "sans-serif"],
        regular: ["WorkSans_Regular", "sans-serif"],
        medium: ["WorkSans_Medium", "sans-serif"],
        semibold: ["WorkSans_SemiBold", "sans-serif"],
        bold: ["WorkSans_Bold", "sans-serif"],
        extrabold: ["WorkSans_ExtraBold", "sans-serif"],
        black: ["WorkSans_Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
