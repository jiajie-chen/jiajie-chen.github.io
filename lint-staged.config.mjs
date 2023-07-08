/* eslint-env node */
export default {
    '*.{js,ts,jsx,tsx,mjs,cjs,astro}': 'eslint',
    '*.css': 'stylelint',
    '*': 'prettier --ignore-unknown --write',
    '*.{js,ts,jsx,tsx,mjs,cjs}': () => 'tsc --noEmit',
    '*.astro': () => 'astro check',
}
