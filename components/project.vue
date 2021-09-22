<template>
  <section class="project comforta" id="project">
    <div class="project-container">
      <div class="project-header"><h1>projects</h1></div>
      <div class="project-content">
        <div class="project-card">
          <div class="project-image"></div>
          <div class="project-details">
            <div class="project-details-header"><h1>clipsy</h1></div>
            <div class="project-details-description"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repellat neque eius doloribus reprehenderit esse repudiandae nam officiis praesentium! Animi nulla fugiat aspernatur vitae facilis tempora necessitatibus aperiam tenetur amet.</p></div>
            <div class="project-details-sub"><h2>technology used</h2></div>
            <div class="project-details-tags"></div>
            <div>
              <button class="project-details-button">demo</button>
            <button class="project-details-button">github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="postcss" scoped>
.project {
  @apply w-full min-h-screen dark:bg-off-gray dark:text-off-white pt-4;
  //background-image: url('~assets/images/fall.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
}
.project-container {
  @apply pt-12 md:pt-20 sm:pt-14 p-5 max-w-screen-xl lg:mx-auto;
}
.project-header {
  @apply text-center text-7xl sm:text-8xl md:text-9xl p-5 rounded;
  background-color: #f47c7c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23f68e70' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23f7a065' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23f9b259' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23fac34d' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23fcd541' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23fde736' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23FFF92A' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
  background-size: contain;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.project-content {
  @apply p-5 mt-5;
}
.project-card {
  @apply shadow flex;
}
.project-image {
  @apply w-64 h-64;
  background-image: url('~assets/images/png/clipsy.png');
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  //clip-path: polygon(0 0, 100% 0, 57% 100%, 0% 100%);
}
.project-detail {
  @apply w-96 bg-off-white-2 dark:bg-off-gray-4;
}
.project-details-header{
  @apply text-5xl;
}
.project-details-description{
@apply text-xs;
}
.project-details-sub{
  @apply text-base;
}
.project-details-tags{
  @apply text-sm;
}
.project-details-button{
  @apply text-sm border border-off-gray-2 px-3 py-2 m-2 rounded;
}
</style>
