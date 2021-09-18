<template>
    <section class="dev">
        <div>Dev Page</div>
        <Dots class=" absolute left-3/4 z-0 opacity-70"/>
        <div class="w-10 h-10 bg-gray-700" @click=" toggleActive = !toggleActive"></div>
    </section>
</template>
<script>
export default {
      data() {
    return {
      toggleActive: false,
    }
  }
}
</script>
<style lang="postcss" scoped>
.dev{
    @apply w-full min-h-screen dark:bg-off-gray dark:text-off-white;
    background-color: #000000;
background-image: url('~assets/images/test.svg');
background-attachment: fixed;
background-size: cover;
}
</style>