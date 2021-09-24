<template>
  <section class="landing comforta" id="home">
    <div class="landing_container">
      <div class="landing_content">
        <div>
          <h1>
            <span class="landing_hi nunito">HI.</span>
            <span class="landing_iam">I'm </span>
            <span class="landing_name">ananthu</span>
          </h1>
        </div>
        <div>
          <h2 class="landing_caption">Front End Developer</h2>
        </div>
      </div>
    </div>
    <div class="landing_arrow">
      <i class="fas fa-chevron-down"></i>
    </div>
  </section>
</template>
<style lang="postcss" scoped>
.landing {
  @apply w-full min-h-screen flex flex-col text-off-gray dark:text-off-white dark:bg-off-gray bg-light-background dark:bg-dark-background;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.landing_container {
  @apply w-full flex items-center justify-around flex-col z-10;
  height: 80vh;
}
.landing_hi {
  @apply text-7xl;
}
.landing_iam{
  @apply text-6xl;
}
.landing_name {
  @apply text-6xl;
  background: linear-gradient(90deg, hsl(29, 92%, 70%) 0%, hsla(0, 87%, 73%, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
      -webkit-transition: font-size 1s;
       -moz-transition: font-size 1s;
         -o-transition: font-size 1s;
            transition: font-size 1s;
              -webkit-transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out;
            -o-transition-timing-function: ease-in-out;
            transition-timing-function: ease-in-out;
}
.landing_name:hover{
  //background: blueviolet;
  font-size: 4.5rem;
}
.landing_caption {
  @apply text-3xl sm:float-right;
}
.landing_content {
  @apply pl-8 sm:pl-0;
}
.landing_arrow {
  @apply text-4xl flex flex-col p-5 leading-4 text-center animate-bounce;
}

</style>
