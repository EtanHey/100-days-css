/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.types.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        courierNew: "var(--font-courier-new)",
        courierNewBold: "var(--font-courier-new-bold)",
      },
      fontSize: {
        "7.5xl": "82px",
      },
      boxShadow: {
        firstDayFrame: "4px 8px 16px 0 rgba(0,0,0,0.1)",
        thirtyEighthFrame: "1px 2px 10px 0px rgba(0,0,0,0.3)",
        firstDayTip: "0 0 13px 0 rgba(0,0,0,0.2)",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        30: "30px",
        32: "32px",
        34: "34px",
        36: "36px",
        38: "38px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
        72: "72px",
        80: "80px",
        96: "96px",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
        "6xl": "6rem",
        "7xl": "7rem",
        "8xl": "8rem",
        "9xl": "9rem",
      },
      height: {
        13: "50px",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
      },
      width: {
        13: "50px",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
        76: "19rem",
      },
      scale: {
        100: "1",
        115: "1.15",
        120: "1.2",
        125: "1.25",
        130: "1.3",
        150: "1.5",
        175: "1.75",
        200: "2",
        225: "2.25",
        250: "2.5",
        275: "2.75",
        300: "3",
        325: "3.25",
        350: "3.5",
        375: "3.75",
        400: "4",
        425: "4.25",
        450: "4.5",
        475: "4.75",
        500: "5",
        525: "5.25",
        550: "5.5",
        575: "5.75",
        600: "6",
        625: "6.25",
        650: "6.5",
        675: "6.75",
        700: "7",
        725: "7.25",
        750: "7.5",
        775: "7.75",
        800: "8",
        825: "8.25",
        850: "8.5",
        875: "8.75",
        900: "9",
        925: "9.25",
        950: "9.5",
        975: "9.75",
        1000: "10",
      },
      animation: {
        expandTop: "expandTop 0.7s cubic-bezier(.76,.34,.72,.81) forwards",
        contractTop: "contractTop 0.7s ease both",
        contractBottom: "contractBottom 0.7s ease both",
        expandBottom:
          "expandBottom 0.7s cubic-bezier(.76,.34,.72,.81) forwards",
      },
      keyframes: {
        expandTop: {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          "30%": {
            transform: "translateY(3px)",
          },
          "60%": {
            transform: "translateY(-3px)",
          },
          "70%": {
            transform: "translateY(-16px) scaleY(.5)",
          },
          "100%": {
            transform: "scaleX(6) scaleY(.5) translateY(-30px)",
          },
        },
        expandBottom: {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          "30%": {
            transform: "translateY(-3px)",
          },
          "60%": {
            transform: "translateY(3px)",
          },
          "70%": {
            transform: "translateY(16px) scaleY(.5)",
          },
          "100%": {
            transform: "scaleX(6) scaleY(.5) translateY(30px)",
          },
        },
        contractTop: {
          "0%": {
            transform: "scaleX(6) scaleY(.5) translateY(-30px)",
          },

          "60%": {
            transform: "scaleX(1) scaleY(.5) translateY(-30px)",
          },
          "100%": {
            transform: "scale(1) translateY(0px)",
          },
        },
        contractBottom: {
          "0%": {
            transform: "scaleX(6) scaleY(.5) translateY(30px)",
          },

          "60%": {
            transform: "scaleX(1) scaleY(.5) translateY(30px)",
          },
          "100%": {
            transform: "scale(1) translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
