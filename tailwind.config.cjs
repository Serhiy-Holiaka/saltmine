/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Gilroy", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            transparent: "transparent",
            white: {
                DEFAULT: "var(--white)",
            },
            blue: {
                light: "var(--blue-light)",
            },
            black: {
                DEFAULT: "var(--black)",
                light: "var(--black-light)",
                dark: "var(--black-dark)",
            },
            yellow: {
                DEFAULT: "var(--yellow)",
            },
            gray: {
                DEFAULT: "var(--gray)",
                dark: "var(--gray-dark)",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
