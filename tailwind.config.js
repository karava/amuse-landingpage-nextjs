const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quote: "var(--font-sourceserif)",
      },

      colors: {
        primary: {
          100: "#EBEAEC",
          200: "#EEE3FF",
          400: "#bb95f4",
          500: "#8E4EED",
          600: "#39323E",
          700: "#27212E",
          750: "#17101E",
          800: "#130D1A",
          900: "#100917",
        },
      },

      backgroundImage: {
        "cta-img": "url('/images/journey-background.png')",

        "mainheading-gradient":
          "linear-gradient(270deg, #BD91FF -4.87%, #FFFFFF 98.06%)",
        "secondary-heading-gradient":
          "linear-gradient(90deg, #7F7D89 12.36%, #F8F7F8 81.18%)",
        "card-gradient": "linear-gradient(180deg, #060409 0%, #140228 100%)",
        "vision-gradient": "linear-gradient(180deg, #6736F4 0%, #4072ED 100%)",
        "paidplan-gradient":
          "linear-gradient(180deg, #8A4AE9 0%, #F38222 49%, #E44C67 100%)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
