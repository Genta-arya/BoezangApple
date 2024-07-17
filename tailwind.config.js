import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#000", // Warna latar belakang hitam
        border: "rgba(255, 255, 255, 0.2)", // Warna border dengan transparansi
      },
    },

    animation: {
      aurora: "aurora 60s linear infinite",
      shimmer: "shimmer 2s linear infinite",
      pulse: "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    keyframes: {
      pulse: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 },
      },
      aurora: {
        from: {
          backgroundPosition: "50% 50%, 50% 50%",
        },
        to: {
          backgroundPosition: "350% 50%, 350% 50%",
        },
      },
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
