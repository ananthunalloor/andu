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
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'andu - ananthu nalloor, My corner of the internet',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Hello world, my name is ananthu and welcome to my corner of the internet. I am a self-taught frontend developer and passionate about technology, and is very interested in learning new technology and making cool stuff with it. This website is to showcase my abilities as a web end developer.',
      },
      {
        name: 'keywords',
        content:'frontend,html,css,js,sass,tailwind,bootstrap,vue.js,nuxt,react,backend,firebase,nodejs,django,tool,git,photoshop,figma,postman,lunacy,exposure,postcss,adobe xd,illustrator,projects,clipsy,andu,easy password gen extension,'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://andu.netlify.app/logo.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'andu - ananthu nalloor',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
      },
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
    Sitemap: 'https://andu.netlify.app/sitemap.xml',
  },

  sitemap: {
    hostname: 'https://andu.netlify.app',
    gzip: true,
    lastmod: new Date(),
    exclude: ['/dev'],
  },*/
  tailwindcss: {
    exposeConfig: true,
    configPath: 'tailwind.config.js',
  },
}
