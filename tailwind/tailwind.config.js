/**  tailwind/tailwind.config.js
 *   Connected Health design‑system
 *   Last updated 2025‑04‑18
 */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  /** ----------------------------------------------------------------
   *  1. Template paths — add/adjust as you add pages or move files
   *  ---------------------------------------------------------------- */
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],

  /** ----------------------------------------------------------------
   *  2. Core‑plugin overrides
   *     – Strip out Tailwind’s generic gradient helpers so the
   *       AI can’t pick vertical gradients.
   *  ---------------------------------------------------------------- */
  corePlugins: {
    backgroundImage: false,      // nukes bg-gradient-to-*
    gradientColorStops: false,   // nukes from-*, via-*, to-*
  },

  /** ----------------------------------------------------------------
   *  3. Design‑token extensions (colours, fonts, spacing, etc.)
   *  ---------------------------------------------------------------- */
  theme: {
    extend: {
      /** 3.1  Custom colour palette
       *  These tokens line up with the Style Guide § 2.1
       */
      colors: {
        "ch-blue":  "#2B8FBB",
        "ch-green": "#64AC00",
        "warm-50":  "#F7F6F6",
        "warm-100": "#E0DCDC",
        "warm-200": "#C1B9B9",
        "warm-300": "#A39696",
        "warm-400": "#827272",
        "warm-500": "#6B5E5E",
        "warm-600": "#534A4A",
        "warm-700": "#3B3435",
        "dark-gray": "#353B36",
      },

      /** 3.2  Typography
       *  Keep the same serif/sans families as before
       */
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["Caecilia", "Roboto Slab", ...defaultTheme.fontFamily.serif],
      },

      /** 3.3  Custom background images
       *  Horizontal warm stripe only.
       */
      backgroundImage: {
        "gradient-warm-x": "linear-gradient(90deg, #ffffff, #f0eeee)",
      },
    },
  },

  /** ----------------------------------------------------------------
   *  4. Plugins — keep any you already rely on here
   *  ---------------------------------------------------------------- */
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
  ],
};
