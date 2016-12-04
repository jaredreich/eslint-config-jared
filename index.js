module.exports = {
  'extends': 'standard',
  'plugins': [
    'standard',
    'promise',
    'html'
  ],
  'rules': {
    // ===== GENERAL =====
    'no-console': 'error',
    // ===== ES6 =====
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {'before': true, 'after': true}],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', { 'allowParens': false }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    // 'no-new-symbol': 'error',
    // 'no-restricted-imports': ['error', 'import1', 'import2'],
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    // 'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    // 'sort-imports': ['error', { 'ignoreCase': true }],
    // 'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'both']
  }
}
