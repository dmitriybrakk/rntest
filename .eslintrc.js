module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        '@react-native-community',
        'airbnb-typescript',
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: 'tsconfig.json',
        createDefaultProgram: true,
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-var-requires': 0,
        'global-require': 0,
        'import/prefer-default-export': 0,
        'import/no-named-as-default': 0,
        'no-unused-vars': 0,
        'no-undef': 2,
        'no-param-reassign': 0,
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'func-names': 0,
        'react/jsx-no-bind': 0,
        'react/no-did-update-set-state': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-indent': 0,
        'react/jsx-indent-props': ['error', 4],
        'react/sort-comp': [2, { order: ['props', 'defaultProps', 'static-methods', 'lifecycle', 'everything-else', 'render'] }],
        'import/extensions': 0,
        'consistent-return': [0, { treatUndefinedAsUnspecified: true }],
        'jsx-a11y/anchor-is-valid': 0,
        'class-methods-use-this': 0,
        'react/default-props-match-prop-types': 0,

        "react/react-in-jsx-scope": [
            0
        ],
        "react/prop-types": [
            0
        ],
        "quotes": 0,
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true
            }
        ]
    },
    settings: {
        react: {
            version: "detect"
        },
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"]
            }
        }
    }
};
