<template>
    <header class="comforta navbar">
        <nav class="navbar_nav">
        <div>
            <h1 class="navbar_logo">andu.</h1>
        </div>
        <div class="navbar_link">
         <a class="navbar_a" href="#">home</a>
         <a class="navbar_a" href="#">about</a>
         <a class="navbar_a" href="#">skills</a>
         <a class="navbar_a" href="#">projects</a>
         <a class="navbar_a" href="#">contact</a>   
        </div>
        </nav>
    </header>
</template>
<style lang="postcss" scoped>
.navbar{
    @apply w-full h-20;
    box-shadow: 0px 2px 4px 2px rgba(100,100,100,0.5);
    background-color: #FCFCFC;
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
    @apply hover:text-blue-400 px-1;
}
</style>