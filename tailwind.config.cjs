/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
