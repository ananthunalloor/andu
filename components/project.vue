<template>
      <section class="project comforta" id="project">
    <div class="project-container">
        <div class=" project-header"><h1>projects</h1></div>
    </div>
    </section>
</template>
<style lang="postcss" scoped>
.project {
  @apply w-full min-h-screen dark:bg-off-gray dark:text-off-white pt-4;
    background-image: url('~assets/images/worldmap.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
}
.project-container {
  @apply pt-12 md:pt-20 sm:pt-14 p-5 max-w-screen-xl lg:mx-auto;
}
.project-header{
  @apply text-center text-7xl sm:text-8xl md:text-9xl p-5;
  background-color: #F47C7C;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23f68e70' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23f7a065' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23f9b259' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23fac34d' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23fcd541' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23fde736' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23FFF92A' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
background-size: contain;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>