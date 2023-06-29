/* eslint-env node */
/** @type {import("prettier").Config} */
module.exports = {
    ...require('prettier-config-standard'),
    // standard config overrides
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    pluginSearchDirs: [__dirname],
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}
