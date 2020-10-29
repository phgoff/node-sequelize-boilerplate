module.exports = {
  env: {
    es2020: true,
    node: true,
  },

  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'prefer-const': 'error',
  },
};
