module.exports = {
    env: {
        node: true,
        es6: true,
        jest: true
    },
    extends: ['eslint:recommended'],
    parseOptions: {
        ecmaVersion: 12
    },
    rules: {
        'no-unused-vars': 'warn',
        'no-console': 'off'
    }
};