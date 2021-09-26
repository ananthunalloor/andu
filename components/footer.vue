<template>
    <section class="bg-white dark:bg-off-gray text-off-gray dark:text-off-white comforta" id="footer">
        <div class="w-full h-40 sm:flex flex-row justify-evenly text-center">
            <div class="hidden md:block text-5xl my-auto pr-16 py-8 border-r-2 border-gray-400"><h1>andu.</h1></div>
            <div class="my-auto text-sm"><p>copyright 2021 clipsy. all rights reserved</p></div>
            <div class="mx-auto my-auto sm:mx-0">
                <div class="flex flex-row mx-auto max-w-max">
                <div class="p-1 rounded-md m-2 shadow border hover:border-blue-300" v-for="social in socials" :key="social.name"><a :href="social.link" target="_blank" ref="noopener"><i :class="social.icon"></i></a></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data(){
    return{
      socials:[
        {
          name: 'github',
          link: 'https://github.com/ananthunalloor/',
          icon: 'fab fa-github-alt fa-lg'
        },
        {
          name: 'linkedin',
          link: 'https://linkedin.com/in/ananthu-nalloor',
          icon: 'fab fa-linkedin-in fa-lg'
        },
        {
          name: 'twitter',
          link: 'https://twitter.com/ananthu_nalloor',
          icon: 'fab fa-twitter fa-lg'
        },
        {
          name: 'mail',
          link: 'mailto:ananthunalloor@gmail.com',
          icon: 'far fa-envelope fa-lg'
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/ananthu_nalloor/',
          icon: 'fab fa-instagram fa-lg'
        },
      ]
    }
  }
}
</script>