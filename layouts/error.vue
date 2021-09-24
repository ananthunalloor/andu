<template>
  <section class="error comforta">
      <div v-if="error.statusCode === 404" class="err-404 err-image"></div>
      <div v-else class="err-server err-image"></div>
    <div class="error-container">
      <div class="error-header">
        <h1 v-if="error.statusCode === 404">Not Found!</h1>
        <h1 class="text-3xl" v-else>An error occurred!</h1>
      </div>
      <div class="back-button">
        <NuxtLink to="/">take me home</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
}
</script>
<style lang="postcss" scoped>
.error {
  @apply w-full bg-off-white dark:bg-off-gray text-off-gray dark:text-off-white text-center flex flex-col items-center justify-around ;
  min-height: calc(100vh - 240px);
}
.err-image{
    @apply w-72 h-72;
    background-size: cover;
    background-repeat: no-repeat;
}
.err-404{
    background-image: url('~assets/images/404.svg');
}
.err-server{
background-image: url('~assets/images/server.svg');
}
.error-container{
    @apply p-3;
}
.error-header{
    @apply text-5xl;
}
.back-button{
    @apply px-2 py-1 mt-5 bg-green-300 text-off-gray text-xl rounded-md shadow-lg;
}
</style>
