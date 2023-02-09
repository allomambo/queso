module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
        "vue/setup-compiler-macros": true,
    },
    extends: [
        "eslint:recommended",
        "@vue/prettier",
        "@vue/typescript/recommended",
        "plugin:vue/vue3-essential",
        "plugin:markdown/recommended",
        "plugin:storybook/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "vue/multi-word-component-names": 0,
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
};
