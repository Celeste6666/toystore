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
    'import/extensions': ['error', 'ignorePackages', {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }],
    'max-len': ['warn', { code: 200, ignoreUrls: true }],
    "operator-linebreak": ["error", "after"],
    "object-curly-newline": ["error", {
      "ObjectExpression": "always",
      "ObjectPattern": {
        "multiline": true
      },
      "ImportDeclaration": "never",
      "ExportDeclaration": {
        "multiline": true,
        "minProperties": 3
      }
    }],
  },
};
