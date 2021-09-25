export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,
  //ssr: false,

  loadingIndicator: {
    name: 'cube-grid',
    color: '#FCFCFC',
    background: '#222831',
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
      { hid: 'description', name: 'description', content: 'Hello world, my name is ananthu and welcome to my corner of the internet. I am a self-taught frontend developer and passionate about technology, and is very interested in learning new technology and making cool stuff with it. This website is to showcase my abilities a web end developer.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
      },
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/16.1.3/smooth-scroll.min.js'},
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
  generate: {
    fallback: true
},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    minimize: true,
    extractCSS: true,
    optimizeCSS: true,
    minifyCSS: true,
    minifyJS: true,
  },
  /*
    robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: '/dev',
    Sitemap: 'https://clipsy.xyz/sitemap.xml',
  },

  sitemap: {
    hostname: 'https://clipsy.xyz',
    gzip: true,
    lastmod: new Date(),
    exclude: ['/dev'],
  },*/
  tailwindcss: {
    exposeConfig: true,
    configPath: 'tailwind.config.js',
  },
}
