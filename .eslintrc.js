module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        // 'import/extensions': [
        //     'error',
        //     'never',
        //     {
        //         js: 'never',
        //         jsx: 'never',
        //         ts: 'never',
        //         tsx: 'never',
        //     },
        // ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/no-unused-vars': 'off',
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
    },
};
