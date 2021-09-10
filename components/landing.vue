<template>
  <section class="landing comforta">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div class="landing_container">
      <div class="landing_content">
        <div>
          <h1>
            <span class="landing_hi nunito">HI.</span>
            <span class="landing_name"> I'm ananthu</span>
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
        v-anime="{
          translateY: [0, 10, 0],
          easing: 'easeInOutSine',
          duration: 3000,
          loop: true,
        }"
        >⮛</span
      >
    </div>
  </section>
</template>
<style lang="postcss" scoped>
.landing {
  @apply w-full flex flex-col;
}
.landing_container {
  @apply w-full flex items-center justify-around flex-col;
  height: 75vh;
}
.landing_hi {
  @apply text-7xl;
}
.landing_name {
  @apply text-6xl;
}
.landing_caption {
  @apply text-3xl sm:float-right;
}
.landing_content {
  @apply pl-8 sm:pl-0;
}
.landing_arrow {
  @apply text-4xl flex flex-col p-5 leading-4 text-center;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

#stars {
    z-index: 0;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1066px 1561px #1f2329;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: ' ';
  position: absolute;
  top: 200px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1066px 1561px #1f2329;
}

#stars2 {
    z-index: 0;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 775px 567px #1f2329;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: ' ';
  position: absolute;
  top: 200px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 775px 567px #1f2329;
}

#stars3 {
    z-index: 0;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1529px 1634px #1f2329;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: ' ';
  position: absolute;
  top: 200px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1529px 1634px #1f2329;
}
</style>
