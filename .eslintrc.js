module.exports = {
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:sonarjs/recommended',
      'plugin:security/recommended',
      'plugin:react/recommended',
      'plugin:jest/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'sonarjs', 'security', 'react', 'jest'],
    rules: {
      // Additional rules go here
      // Created with love by Ansh Goyal
    },
  };
  