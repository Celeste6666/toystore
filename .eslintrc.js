module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/base',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': ['error', 'ignorePackages'],
    "max-len": ["warn", { "code": 200, "ignoreUrls": true }]
  },
};
