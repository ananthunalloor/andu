<template>
    <header class="comforta navbar">
        <nav class="navbar_nav">
        <div>
            <h1 class="navbar_logo">andu.</h1>
        </div>
        <div class="navbar_link">
         <a class="navbar_a" href="#">home</a>
         <a class="navbar_a" href="#about">about</a>
         <a class="navbar_a" href="#">skills</a>
         <a class="navbar_a" href="#">projects</a>
         <a class="navbar_a" href="#">contact</a>   
        </div>
        <div >
            <button @click="toggle()">Theme</button>
        </div>
        </nav>
    </header>
</template>

<script>
export default {
    methods:{
        toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "dark" ? "light" : "dark";
    }
    }
}
</script>

<style lang="postcss" scoped>
.navbar{
    @apply w-full h-20 sticky top-0 z-50 bg-white shadow-md text-off-gray dark:text-off-white dark:bg-off-gray;
    //box-shadow: 0px 2px 4px 2px rgba(100,100,100,0.5);
}
.navbar_nav{
    @apply h-full flex items-center sm:px-20 px-7;
}
.navbar_logo{
    @apply text-4xl;
}
.navbar_link{
    @apply hidden md:flex ml-auto justify-between text-lg;
    width: 27rem;
}
.navbar_a{
    @apply px-1;
}
.navbar_a:hover{
    background: linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%);
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>