import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  ignores: [
    '**/*.css',
    '**/*.min.*',
    'node_modules',
    '.nuxt',
    '.output',
    'dist',
    'build',
  ],
  rules: {
    'no-async-promise-executor': 'off',
    'no-use-before-define': 'off',
    'ts/no-use-before-define': 'off',
    'no-tabs': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-throw-literal': 'off',
  },
  stylistic: {
    indent: 'tab',
    quotes: 'single',
  },
})
