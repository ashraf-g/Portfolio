// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class",
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         burtons: "burtons",
//         poppins: ["Poppins", "sans-serif"],
//       },
//       colors: {
//         // Royal Purple & Mint palette
//         primary: {
//           light: "#7b1fa2", // Royal Purple (light mode)
//           dark: "#9c27b0", // Electric Purple (dark mode)
//         },
//         secondary: {
//           light: "#b2dfdb", // Light Mint (light mode)
//           dark: "#80cbc4", // Bright Mint (dark mode)
//         },
//         background: {
//           light: "#fafafa", // White Smoke (light mode)
//           dark: "#0d0d0d", // Very Dark (dark mode)
//         },
//         text: {
//           light: "#212121", // Dark (light mode)
//           dark: "#e0e0e0", // Light (dark mode)
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Flattened for Tailwind utility class compatibility
        "primary-light": "#6C4AB6",
        "primary-dark": "#4A3A78",
        "secondary-light": "#B5EAEA",
        "secondary-dark": "#2D6A4F",
        "background-light": "#F8F9FA",
        "background-dark": "#1A1A1A",
        "text-light": "#1C1C1E",
        "text-dark": "#EAEAEA",

        // Premium Accent Colors
        gold: "#D4AF37",
        platinum: "#E5E4E2",
        obsidian: "#0B0C10",
        pearl: "#F5F5F5",
        emerald: "#50C878",

        // Modern Accent Colors
        sky: "#38BDF8",
        coral: "#FF6B6B",
        indigo: "#6366F1",
        cyan: "#06B6D4",
        slate: "#64748B",
      },
    },
  },
  plugins: [],
};
