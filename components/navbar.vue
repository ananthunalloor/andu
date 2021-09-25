<template>
  <header class="comforta navbar">
    <nav class="navbar_nav">
      <div><NuxtLink to="/">
        <h1 class="navbar_logo">andu.</h1>
        </NuxtLink>
      </div>
      <div class="navbar_link">
        <NuxtLink to="/#home" class="navbar_a">home</NuxtLink>
        <NuxtLink to="/#about" class="navbar_a">about</NuxtLink>
        <NuxtLink to="/#skill" class="navbar_a">skills</NuxtLink>
        <NuxtLink to="/#project" class="navbar_a">projects</NuxtLink>
        <NuxtLink to="/#contact" class="navbar_a">contact</NuxtLink>
      </div>
      <div class="navbar_theme">
        <label class="hidden" for="theme-change">theme changer</label>
        <input name="theme" class="navbar_toggle" type="checkbox" @click="toggle()" id="theme-change">
      </div>
      <div class="nav-burger">
        <i class="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  //scroll : new SmoothScroll('.navbar_link a[href*="#"]'),
  data() {
    return {
      toggleActive: false,
    }
  },
  methods: {
    toggle() {
      this.toggleActive = !this.toggleActive
      if(!this.toggleActive){
                  this.$colorMode.value = 'dark'
              }else{
                  this.$colorMode.value = 'light'
              }
              this.$colorMode.preference = this.$colorMode.value;
    },
  },

}
</script>

<style lang="postcss" scoped>
.navbar {
  @apply w-full h-20 sticky top-0 z-20 bg-white shadow-md text-off-gray dark:text-off-white dark:bg-off-gray;
  //box-shadow: 0px 2px 4px 2px rgba(100,100,100,0.5);
}
.navbar_nav {
  @apply h-full flex items-center px-7 md:px-20 xl:max-w-7xl xl:mx-auto; 
}
.navbar_logo {
  @apply text-4xl;
}
.navbar_link {
  @apply hidden sm:flex ml-auto justify-between text-lg;
  width: 27rem;
}
.navbar_a {
  @apply px-1 transition duration-150 ease-in-out;
}
.navbar_a:hover {
  background: linear-gradient(
    90deg,
    hsla(29, 92%, 70%, 1) 0%,
    hsla(0, 87%, 73%, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar_theme {
  @apply ml-auto sm:pl-5 sm:ml-0 p-1 flex items-center;
}
.navbar_toggle {
  @apply  w-11 h-6 relative bg-gray-400 rounded-full shadow-lg;
  background-image: url('~assets/images/moon.svg');
  background-size: contain;
  background-position: right bottom;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  outline: none
}
.navbar_toggle::before{
    @apply absolute h-5 w-5 m-0.5 duration-300 ease-in-out rounded-full bg-gray-50 top-0 left-0 shadow-inner;
    content: '';
}
.navbar_toggle:checked{
    @apply bg-blue-400;
    background-image: url('~assets/images/sun.svg');
    background-position: left bottom;
}
.navbar_toggle:checked::before{
    @apply bg-yellow-200;
    transform:translate(100%);
}
.nav-burger{
  @apply hidden p-3 ml-2;
}
</style>
