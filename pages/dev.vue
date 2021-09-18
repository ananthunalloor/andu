<template>
    <section class="dev">
        <div>Dev Page</div>
        <Dots class=" absolute left-3/4 z-0 opacity-70"/>
        <div class="w-10 h-10 bg-gray-700" @click=" toggleActive = !toggleActive"></div>
        <div class="form-container">
          <form method="POST" action="/" netlify>
            <div class="form-small-container">
            <div class="form-small">
              <label for="default" class="form-label">firstname</label>
              <input name="firstname" type="text" placeholder="john" class="form-input" required/>
            </div>
            <div class="form-small">
              <label for="default" class="form-label">lastname</label>
              <input name="lastname" type="text" placeholder="doe" class="form-input" required/>
            </div>
            </div>
            <div class="form-large">
              <label for="default" class="form-label">email</label>
              <input
              name="email"
              v-model="messageForm.email"
                type="email"
                placeholder="examplemail@email.com"
                class="form-input" required
              />
            </div>
            <div class="form-large">
              <label for="default" class="form-label">message</label>
              <textarea
              name="message"
                type="text" rows="6"
                placeholder="write your message here."
                class="form-input"
              />
            </div>
            <button type="submit" class="form-button">send</button>
          </form>
        </div>
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