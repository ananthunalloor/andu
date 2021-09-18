<template>
<section>
    <Navbar/>
    <Nuxt/>
</section>
</template>
<script>
export default {
      mounted(){
      this.$colorMode.preference = this.$colorMode.value = 'dark';
  }
}
</script>