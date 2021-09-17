<template>
  <section class="contact comforta" id="contact">
    <div class="contact-container">
      <div class="contact-header">
        <h1>contact</h1>
      </div>
      <div class="contact-content">
        <div class="form-container">
          <form :model="messageForm" v-on:submit.prevent="sendMessage(messageForm)">
            <div class="form-small-container">
            <div class="form-small">
              <label for="default" class="form-label">firstname</label>
              <input v-model="messageForm.firstName" type="text" placeholder="john" class="form-input" required/>
            </div>
            <div class="form-small">
              <label for="default" class="form-label">lastname</label>
              <input v-model="messageForm.lastName" type="text" placeholder="doe" class="form-input" required/>
            </div>
            </div>
            <div class="form-large">
              <label for="default" class="form-label">email</label>
              <input
              v-model="messageForm.email"
                type="email"
                placeholder="examplemail@email.com"
                class="form-input" required
              />
            </div>
            <div class="form-large">
              <label for="default" class="form-label">message</label>
              <textarea
              v-model="messageForm.message"
                type="text" rows="6"
                placeholder="write your message here."
                class="form-input"
              />
            </div>
            <button type="submit" class="form-button">send</button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      responce: '',
      messageForm:{
        firstName: '',
        lastName:'',
        email: '',
        message:'',
      }
    }
  },
  methods:{
    async sendMessage(messageData){
      console.log(messageData.firstName);
      this.responce = this.$axios.$post('/functions/contact',{
		firstname: messageData.firstName,
    lastname: messageData.lastName,
    email: messageData.email,
    message: messageData.message
})
console.log(this.responce);
    },
  },
}
</script>
<style lang="postcss" scoped>
.contact {
  @apply w-full min-h-screen dark:bg-off-gray dark:text-off-white;
  background-image: url('~assets/images/world.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
}
.contact-container {
  @apply flex flex-col sm:flex-row pt-12 md:pt-20 sm:pt-14 p-5 max-w-screen-xl lg:mx-auto;
}
.contact-header {
  @apply text-7xl sm:text-8xl md:text-9xl pl-5 md:pl-8 sm:pl-14 py-5 sm:py-7 sm:pr-5;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: #6cb3fa;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='526' height='438.3' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.09'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
  background-size: contain;
}
@screen sm {
  .contact-header {
    writing-mode: sideways-lr;
  }
}
.contact-content {
  @apply w-full h-full m-auto sm:pl-10;
}
.form-container {
  @apply text-off-gray dark:text-off-white max-w-xl h-auto m-auto;
}
.form-small-container{
  @apply sm:flex flex-wrap justify-between max-w-lg;
}
.form-small {
  @apply flex flex-col mt-3;
}
.form-large {
  @apply flex flex-col mt-3 max-w-lg;
}
.form-label {
  @apply select-none text-lg;
}
.form-input {
  @apply px-4 py-2 rounded-lg bg-off-white dark:bg-off-gray-4;
}
.form-button{
  @apply px-2 py-1 mx-6 my-5 bg-green-500 text-off-gray shadow-2xl rounded-md;
}
</style>
