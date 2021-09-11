export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  loadingIndicator: {
    name: 'folding-cube',
    color: '#f9fafb',
    background: '#111827',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ananthunalloor',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'},
      {src: 'http://threejs.org/examples/js/libs/stats.min.js'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  purgeCSS: {    
    whitelist: ['dark-mode'],  
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-animejs',
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    //'@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  //axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  tailwindcss: {
    exposeConfig: true,
    configPath: 'tailwind.config.js',
  },
}
