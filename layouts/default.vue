<template>
<section>
    <Navbar/>
    <Nuxt/>
    <Footer/>
</section>
</template>
<script>
export default {
      mounted(){
      this.$colorMode.preference = this.$colorMode.value = 'dark';
  }
}
</script>