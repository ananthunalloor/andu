<template>
  <div :id="id" class="particles-js"></div>
</template>
<style lang="postcss" scoped>
.particles-js{
    @apply w-full absolute bg-transparent z-0;
    height: 80vh;
}
</style>
<script>
export default {
  head(){
        script: [
      {src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'},
      {src: 'https://threejs.org/examples/js/libs/stats.min.js'},
    ]
  },
  data() {
    return {
      id: 'particles-instance-' + Math.floor(Math.random() * 5000),
      darlColor: '#787A91',
      lightColor: '#fc9c47',
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initParticleJS()
    })
  },
  methods: {
    initParticleJS() {
      particlesJS(this.id, {
        particles: {
          number: {
            value: 80,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: '#fc9c47',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#fc9c47',
            opacity: 1,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: false,
              mode: 'grab',
            },
            onclick: {
              enable: false,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 500,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      })
    },
  },
}
</script>
