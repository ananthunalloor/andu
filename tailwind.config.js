module.exports = {
 // mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './nuxt.config.{js,ts}',
    ], 
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors:{
        'off-gray': '#222831',
        'off-white': '#FCFCFC',
        'off-gray-2': '#30475E',
        'off-gray-3': '#303841',
        'off-gray-4': '#3A4750',
        'off-white-2': '#fffcfc',
      }
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}
