module.exports = {
  "extends": [
    "airbnb",
    "plugin:jsx-a11y/recommended"
  ],
 "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    browser: true,
    node: true,
    node: true,
    es6: true,
    browser: true,
    jasmine: true,
    mocha: true,
    jquery: true
  },
  "rules": {
    'camelcase': 0,
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, { before: false, after: true }],
    'consistent-return': 0,
    'curly': 0,
    'default-case': 0,
    'eqeqeq': [2, 'smart'],
    'func-names': 0,
    'guard-for-in': 2,
    'indent': [2, 2, { SwitchCase: 1 }],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [2, { before: true, after: true }],
    'max-len': 0,
    'new-cap': 0,
    'no-bitwise': 0,
    'no-caller': 2,
    'no-console': 0,
    'no-else-return': 0,
    'no-empty-class': 0,
    'no-multi-spaces': 2,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-spaced-func': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-unneeded-ternary': 2,
    'no-unreachable': 2,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-use-before-define': [1, 'nofunc'],
    'no-var': 0,
    'object-curly-spacing': [2, 'always'],
    'one-var': [0, 'never'],
    'one-var-declaration-per-line': [2, 'always'],
    'padded-blocks': 0,
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': [2, 'never'],
    'spaced-comment': [2, 'always'],
    'strict': 0,
    'quote-props': 0,
    'quotes': [1, 'single'],
    'wrap-iife': [2, 'outside'],
    'vars-on-top': 0,
    'global-require': 0,
    'no-plusplus': 0,
    'eqeqeq': 0,
    'no-case-declarations': 0,
    'import/no-mutable-exports': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }]
  },
  'globals': {
    by: true,
    browser: true,
    element: true,
    inject: true,
    io: true,
    moment: true,
    Modernizr: true,
    Promise: true,
    __TESTING__: true,
    _: false,
    ApplicationConfiguration: true
  }
};