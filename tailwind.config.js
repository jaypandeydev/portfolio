/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#ffffff",
        bgAlt: "#f6f6f4",
        ink: "#18181b",
        inkSoft: "#52525b",
        muted: "#a1a1aa",
        line: "#e8e8e4",
        accent: "#2563eb",
        accentSoft: "#eff3fe",
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};
