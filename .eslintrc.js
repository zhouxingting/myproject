module.exports = {
  root: true,
  globals: { wx: true },
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    "no-use-before-define": [2, "nofunc"],
  }
}