/* eslint-env node */
import tailwindTypography from '@tailwindcss/typography'
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
    theme: {
        extend: {},
    },
    plugins: [tailwindTypography, daisyui],
}
