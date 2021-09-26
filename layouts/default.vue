<template>
<section>
    <Navbar/>
    <Nuxt/>
    <LazyFooter/>
</section>
</template>
<script>
export default {
      mounted(){
      this.$colorMode.preference = this.$colorMode.value = 'dark';
  }
}
</script>