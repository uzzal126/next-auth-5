/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1922fb",
        },
        secondary: {
          DEFAULT: "#3941ee",
        },
        tertiary: {
          DEFAULT: "#4850ff",
        },
        yellow: {
          DEFAULT: "##FFC301",
        },
        heading: {
          DEFAULT: "#050A37",
        },
        dark: {
          DEFAULT: "#212121",
        },
        paragraph: {
          DEFAULT: "#616161",
        },
        paragraphDark: {
          DEFAULT: "#363C43",
        },

        body: "#333333",
        light: "#444444",
        white: {
          DEFAULT: "#FFFFFF",
          100: "#f1f1f1",
          200: "#f2f2f2",
          300: "#f3f3f3",
          400: "#f4f4f4",
          500: "#f5f5f5",
          600: "#f6f6f6",
          700: "#f7f7f7",
          800: "#f8f8f8",
          fafafa: "#fafafa",
        },
        blue: {
          light: "#e6edfa",
          dark: "#050a37",
        },
        black: {
          DEFAULT: "#121212",
        },
        orange: {
          primary: "#ef710a",
          secondary: "#e17d0e",
        },
      },
      borderColor: {
        // DEFAULT: "#f00",
      },
      borderRadius: {
        DEFAULT: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
      },
      spacing: {
        7.5: "1.875rem",
        15: "3.75rem",
      },
      keyframes: {
        fadeInDown: {
          from: {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown .7s ease-in-out 0s 1 normal none running",
      },
    },
    fontFamily: {
      // DEFAULT: ["Lato", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1610px",
    },
  },
  plugins: [],
};
