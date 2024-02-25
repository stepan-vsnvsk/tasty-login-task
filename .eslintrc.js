module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    plugins: ['cypress', 'prettier', 'unused-imports'],
    extends: ['google', 'plugin:cypress/recommended', 'prettier'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'prettier/prettier': 'error',
        'prefer-const': 'error',
        'unused-imports/no-unused-imports': 'error',
        'cypress/no-pause': 'error'
    }
};
