module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    plugins: ['@typescript-eslint', 'prettier', 'react'],
    rules: {
        'import/extensions': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts', 'tsx'] }],
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'arrow-body-style': ['error', 'as-needed'],
        'react/react-in-jsx-scope': 'off',
        // 'prettier/prettier': ['error', { singleQuote: true }],
        'prettier/prettier': 0,
        'no-duplicate-imports': 'off',
        'import/prefer-default-export': 'off',
        'no-console': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
};
