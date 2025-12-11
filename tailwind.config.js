module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0E86D4",
        brandBlueLight: "#5BC0F8",
        brandIndigo: "#4A6CF7",
        brandSky: "#DFF6FF",
        brandGray: "#F6F7F9",
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.08)",
        card: "0 6px 20px rgba(0,0,0,0.12)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
