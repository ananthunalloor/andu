<template>
  <section class="landing comforta">
     <client-only>
    <Particle/>
    </client-only>
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
      <span
        class="tracking-tighter"
        >⮛</span
      >
    </div>
  </section>
</template>
<style lang="postcss" scoped>
.landing {
  @apply w-full flex flex-col text-off-gray dark:text-off-white dark:bg-off-gray;
  //background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='332' height='332' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d2d2d2' fill-opacity='0.17'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.17'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
  //background-position: center;
//background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='332' height='332' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%231b1f25' fill-opacity='0.67'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.67'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
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
