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
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
      },
    },
  },
  plugins: [],
};
