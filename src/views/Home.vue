<template>
  <div class="flex flex-center container is-fluid hero">
    <div class="column is-full flex flex-start">
      <h1 class="is-center is-uppercase neon-sign">Hey There</h1>
    </div>
    <div class="column is-full hero-paragraph flex flex-start">
      <p class="is-left">
        My name is Alice, I’m a Tel-Aviv based self-taught creative developer.
      </p>
      <p class="is-left">
        Melomaniac with formal music education. Always searching for the best
        tunes around
      </p>
      <p class="is-left">
        Ink/paper waster(love sketching, lettering,doodling etc), and casual
        games player=)
      </p>
    </div>
  </div>
  <div class="flex flex-center container">
    <div class="column is-full flex flex-start">
      <h2 class="is-uppercase is-full"><b>| </b>skills</h2>
      <p class="is-left is-full">
        <b> Frontend:</b> [ Common: <br />[ HTML, CSS, SCSS, ], JS: <br />[
        jQuery, Handlebars.js, Anime.js, Axios, Apollo ,Cypress ] Frameworks:
        <br />[ Vue.js, Vuex] ],
      </p>
      <p class="is-left">
        <b> Backend: </b> [ PHP, mySQL, Smarty, Strapi, ],<br />
        Frameworks:<br />[ WordPress ],
      </p>
      <p class="is-left">
        <b>Design: </b>[ Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator ],
      </p>
      <p class="is-left"><b> Misc: </b>[Ubuntu, bash, Git ]</p>
    </div>
  </div>
  <div class="flex flex-center container">
    <div class="column is-full flex flex-start">
      <h2 class="is-uppercase is-full">Development</h2>
      <postsGrid
        :posts="this.posts"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import postsGrid from '@/components/postsGrid.vue';

export default {
  name: 'Home',
  components: {
    postsGrid,
  },
  computed: {
    ...mapGetters({
      posts: 'getBlog',
    }),
  },
};
</script>
