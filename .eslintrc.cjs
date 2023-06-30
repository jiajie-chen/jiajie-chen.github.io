/* eslint-env node */
/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    plugins: ['@typescript-eslint', 'jsdoc'],
    extends: [
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended',
        'plugin:jsdoc/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        impliedStrict: true,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
        },
        {
            files: ['*.ts'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:jsdoc/recommended-typescript',
                'prettier',
            ],
        },
        {
            files: ['*.js', '*.cjs', '*.mjs'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:jsdoc/recommended',
                'prettier',
            ],
        },
    ],
}
