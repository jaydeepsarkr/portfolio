/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -.55, 0.265, 1.55)", // Existing custom timing function
      },
      keyframes: {
        "gradient-x": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15%)" },
        },
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        colorPulse: {
          "0%, 100%": { backgroundColor: "#1788ae" },
          "50%": { backgroundColor: "#47afa1" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite", // Smooth gradient animation
        pulse: "pulse 2s ease-in-out infinite", // Pulse effect for the circle
        bounce: "bounce 1s infinite", // Bounce effect for extra animation
        rotate360: "rotate360 4s linear infinite", // Full rotation effect
        colorPulse: "colorPulse 2s ease-in-out infinite", // Background color pulsing
      },
      backgroundSize: {
        "400%": "400% 400%", // Extended background size for smooth gradient animations
      },
      colors: {
        customGradientStart: "#1788ae",
        customGradientMiddle: "#459bd5",
        customGradientEnd: "#fc815c",
      },
    },
  },
  plugins: [],
};
