<template>
  <div class="absolute top-0 left-0 right-0 z-50 w-full bg-yellow-100" v-if="showBanner">
    <div class="lg:mx-auto max-w-screen-xl flex items-center justify-between">
      <div class="flex mx-auto">
        <p class="italic">This is a old version, working on something new</p>
        <a class="font-bold italic px-1 text-blue-500 underline" href="https://dev2.ananthu.dev" target="_blank">here</a>
      </div>
      <button class="px-6 font-bold" title="remove banner" v-on:click="showBanner = false">x</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBanner: true,
    };
  },
};
</script>
