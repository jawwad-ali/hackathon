// /**
//  * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
//  */
// module.exports = {
//   content: [
//     "./node_modules/flowbite-react/**/*.js",
//     "./pages/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./public/**/*.html",
//   ],
//   plugins: [
//     require("flowbite/plugin")
//   ],
//   theme: {},
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,md,mdx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [require("./plugin")],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E7F2F6",
          100: "#CFE5ED",
          200: "#B7D8E3",
          300: "#9FCBDA",
          400: "#87BFD1",
          500: "#3E98B5",
          600: "#268BAC",
          700: "#0E7EA3",
          800: "#0A5872",
          900: "#084C62",
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
};
