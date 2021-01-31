module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier', 'eslint-plugin-tsdoc'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 0, // See: https://github.com/typescript-eslint/typescript-eslint/issues/1856
    '@typescript-eslint/no-unused-vars-experimental': 1,
    'no-undef': 0, // See: https://github.com/typescript-eslint/typescript-eslint/issues/342
    'no-unused-vars': 0,
    'tsdoc/syntax': 1,
  },
}
