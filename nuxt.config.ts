import * as pkg from './package.json'

export const site: Types.ISiteData = {
  title: pkg.name || '❗ title missing',
  description: pkg.description || '❗  description missing',
  author: pkg.author || '',
  url: pkg.homepage || '',
  lang: 'de_DE',
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  mode: 'universal',
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: { lang: site.lang },
    title: site.title,
    titleTemplate: `%s | ${site.title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: site.description },
      { hid: 'author', name: 'author', content: site.author },
      { hid: 'robots', name: 'robots', content: 'noindex nofollow' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: site.url },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      presets: ['@nuxt/babel-preset-app'],
    },
  },
}
