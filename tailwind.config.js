/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            montserrat: ['"Montserrat", "sans-serif'],
        },
        extend: {
            backgroundColor: {
                "input-bg": "rgba(71, 98, 255, 0.08)",
                "input-bg-contact": "rgba(255, 255, 255, 0.10)",
                "input-bg-footer": "rgba(255, 255, 255, 0.00)",
            },
            boxShadow: {
                card_shadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
            },
            colors: {
                "link-color": "rgba(255, 255, 255, 0.80)",
                "text-color": "rgba(51, 51, 51, 0.80)",
                "text-color2": "rgba(51, 51, 51, 0.60)",
            },
        },
    },
    plugins: [],
};
