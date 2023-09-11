export default {
  target: 'static',
  router: {
    base: '/gallery-of-the-galaxy',
  },

  head: {
    title: '🪐 gallery-of-the-galaxy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/css/main'],

  plugins: ['~/plugins/fontawesome.js'],

  components: [
    { path: '~/components', extensions: ['vue'], pathPrefix: false },
  ],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    'nuxt-client-init-module',
  ],

  axios: {
    baseURL: process.env.NASA_API_URL,
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  serverMiddleware: {
    '/spacestagram-vue': '~/serverMiddleware/redirectRoute.js',
  },

  build: {},
  publicRuntimeConfig: {
    nasaApiKey: process.env.NASA_API_KEY || 'DEMO_KEY',
  },
}
