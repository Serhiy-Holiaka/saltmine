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
                    light: "var(--gray-light)",
                },
            },
            gridTemplateColumns: {
                video: "minmax(600px, 700px) minmax(300px, 390px)",
                footer: "minmax(400px, 470px) 170px minmax(180px, 210px) 110px",
            },
            boxShadow: {
                DEFAULT: "0 8px 30px 0 rgba(31, 34, 35, 0.25)"
            },
        },
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
};
