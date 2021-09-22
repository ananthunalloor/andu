<template>
  <section class="project comforta" id="project">
    <div class="project-container">
      <div class="project-header"><h1>projects</h1></div>
      <div class="project-content">
        <div class="project-card"  v-for="project in projects" :key="project.name">
          <div class="project-image" :style="{'background-image': 'url('+project.background+')' }"></div>
          <div class="project-details">
            <div class="project-details-header"><h1>{{project.name}}</h1></div>
            <div class="project-details-description"><p>{{project.description}}</p></div>
            <div class="project-details-sub"><h2>technology used</h2></div>
            <div class="project-details-tags">
              <span class="detail-tag" v-for="tag in project.tags" :key="tag">{{tag}}</span>
            </div>
            <div class="project-button-holder">
              <div v-if="project.demo != ''" class="project-details-button"><a href="">demo</a></div>
            <div class="project-details-button"><a href="">github</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      projects: [
        {
          name:'clipsy',
          description:'clipsy is a web app that helps you easily download twitch clips, simply using the clip url.',
          demo:'https://clipsy.xyz',
          background: require('assets/images/png/clipsy.png'),
          tags:['nuxt','tailwind', 'axios','pwa','netlify','twitch api'],
          github:'https://github.com/ananthunalloor/',
        },
        {
          name:'andu',
          description:'andu is the personal website that i build to showcase by frontend abilities.',
          demo:'',
          background: require('assets/images/png/andu.png'),
          tags:['nuxt','tailwind', 'axios', 'animate.css','netlify','netlify functions'],
          github:'https://github.com/ananthunalloor/',
        },
        {
          name:'easy password gen extension',
          description:'it is an easy-to-use chrome/firefox extension to generate strong passwords.',
          demo:'',
          background: require('assets/images/png/passgen.png'),
          tags:['vue','css', 'js'],
          github:'https://github.com/ananthunalloor/',
        },
      ]
    }
  }
}
</script>
<style lang="postcss" scoped>
.project {
  @apply w-full min-h-screen dark:bg-off-gray dark:text-off-white pt-4;
  //background-image: url('~assets/images/fall.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
}
.project-container {
  @apply pt-12 md:pt-20 sm:pt-14 p-5 max-w-screen-xl lg:mx-auto;
}
.project-header {
  @apply text-center text-7xl sm:text-8xl md:text-9xl p-5 rounded;
  background-color: #f47c7c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23f68e70' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23f7a065' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23f9b259' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23fac34d' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23fcd541' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23fde736' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23FFF92A' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
  background-size: contain;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.project-content {
  @apply p-5 mt-10;
}
.project-card {
  @apply max-w-max mb-5 mx-auto sm:flex bg-off-white-2 dark:bg-off-gray-4 shadow rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105;
}
.project-image {
  @apply hidden sm:block sm:w-80 sm:h-80 flex-grow-0 flex-shrink-0 rounded-md;
  background-image: url('~assets/images/png/clipsy.png');
  background-repeat: no-repeat;
  background-size: contain;
  clip-path: polygon(0 0, 100% 0, 57% 100%, 0% 100%);
}
.project-details {
  @apply max-w-lg p-4 flex-shrink flex-grow;
}
.project-details-header{
  @apply md:text-5xl text-3xl px-3 border-l-2 border-purple-600 shadow-inner max-w-max;
}
.project-details-description{
@apply text-xs pl-2 pt-4;
}
.project-details-sub{
  @apply text-base pt-4 pb-2;
}
.project-details-tags{
  @apply text-sm pl-2 pb-1 flex flex-wrap;
}
.detail-tag{
  @apply text-off-gray px-1 m-1 bg-gray-300 hover:bg-purple-400 rounded shadow-inner transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105;
}
.project-button-holder{
  @apply flex flex-wrap;
}
.project-details-button{
  @apply text-sm border hover:bg-purple-200 hover:text-off-gray border-off-gray-2 dark:border-off-white-2 px-3 py-2 m-2 rounded max-w-max transition duration-500 ease-out transform hover:translate-y-1 hover:scale-105;
}
</style>
