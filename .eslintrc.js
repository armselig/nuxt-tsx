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
    '@typescript-eslint/no-unused-vars-experimental': 1,
    'tsdoc/syntax': 'warn',
  },
}
