const path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'import', 'react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    'no-restricted-syntax': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'react/prop-types': 'off',
  },
}
