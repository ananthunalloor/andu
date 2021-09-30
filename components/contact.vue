<template>
  <section class="contact comforta" id="contact">
    <div class="contact-container">
      <div class="contact-header">
        <h1>contact</h1>
      </div>
      <div class="contact-content">
        <div class="form-container">
          <div
            class="text-sm transition ease-in-out duration-200"
            v-if="res != ''"
          >
            <div
              v-if="res.status == 200"
              class="
                pl-3
                p-1
                bg-green-100
                text-green-600
                rounded
                border-l-4 border-green-600
              "
            >
              <h4><i class="far fa-check-circle"></i>  message is send! thank you.</h4>
            </div>
            <div
            v-else-if="res.status == 422"
              class="
                pl-3
                p-1
                bg-red-100
                text-red-600
                rounded
                border-l-4 border-red-600
              "
            >
              <h4><i class="far fa-times-circle"></i>  sorry. something went wrong!</h4>
            </div>
          </div>
          <form
            :model="messageForm"
            v-on:submit.prevent="sendMessage(messageForm)"
          >
            <div class="form-small-container">
              <div class="form-small">
                <label for="default" class="form-label">firstname</label>
                <input
                  v-model="messageForm.firstName"
                  type="text"
                  placeholder="john"
                  class="form-input"
                  required
                />
              </div>
              <div class="form-small">
                <label for="default" class="form-label">lastname</label>
                <input
                  v-model="messageForm.lastName"
                  type="text"
                  placeholder="doe"
                  class="form-input"
                  required
                />
              </div>
            </div>
            <div class="form-large">
              <label for="default" class="form-label">email</label>
              <input
                v-model="messageForm.email"
                type="email"
                placeholder="examplemail@email.com"
                class="form-input"
                required
              />
            </div>
            <div class="form-large">
              <label for="default" class="form-label">message</label>
              <textarea
                v-model="messageForm.message"
                type="text"
                rows="6"
                placeholder="write your message here."
                class="form-input"
                required
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
  data() {
    return {
      res: Number,
      responce: '',
      messageForm: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    async sendMessage(messageData) {
     this.res = await this.$axios
        .$get('https://andu.netlify.app/functions/sendmessage', {params:{
          firstname: messageData.firstName,
          lastname: messageData.lastName,
          email: messageData.email,
          message: messageData.message,
        }})
        setTimeout(() =>{
          this.res = ''
        }, 5000);
       this.messageForm = {}
    },
  },
}
</script>
<style lang="postcss" scoped>
.contact {
  @apply w-full min-h-screen dark:bg-off-gray dark:text-off-white;
  background-image: url('~assets/svgbackground/worldmap.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.contact-container {
  @apply flex flex-col sm:flex-row pt-12 md:pt-20 sm:pt-14 p-5 max-w-screen-xl lg:mx-auto;
}
.contact-header {
  @apply text-7xl sm:text-8xl md:text-9xl pr-5 md:pr-8 sm:pr-16 py-5 sm:py-7 sm:pl-5 sm:transform sm:rotate-180;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  //background-color: #DD00FF;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg fill-opacity='0.88'%3E%3Ccircle fill='%23330055' cx='50' cy='0' r='50'/%3E%3Cg fill='%2339005e' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23400066' cx='50' cy='100' r='50'/%3E%3Cg fill='%2347006f' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%234e0077' cx='50' cy='200' r='50'/%3E%3Cg fill='%23550080' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%235c0088' cx='50' cy='300' r='50'/%3E%3Cg fill='%23640091' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%236c0099' cx='50' cy='400' r='50'/%3E%3Cg fill='%237400a2' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%237d00aa' cx='50' cy='500' r='50'/%3E%3Cg fill='%238500b3' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%238e00bb' cx='50' cy='600' r='50'/%3E%3Cg fill='%239700c4' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a000cc' cx='50' cy='700' r='50'/%3E%3Cg fill='%23aa00d4' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b400dd' cx='50' cy='800' r='50'/%3E%3Cg fill='%23be00e6' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c800ee' cx='50' cy='900' r='50'/%3E%3Cg fill='%23d200f7' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23D0F' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
}
@screen sm {
  .contact-header {
    writing-mode: vertical-lr;
  }
}
.contact-content {
  @apply w-full h-full m-auto sm:pl-10;
}
.form-container {
  @apply text-off-gray dark:text-off-white max-w-xl h-auto m-auto;
}
.form-small-container {
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
  @apply px-4 py-2 shadow-inner rounded-lg bg-off-white dark:bg-off-gray-4;
}
.form-button {
  @apply text-lg px-4 py-2 mx-7 my-6 bg-green-500 text-off-gray shadow-lg rounded-md;
}
</style>
