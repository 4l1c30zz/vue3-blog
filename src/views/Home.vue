<template>
  <div class="flex flex-center container is-fluid hero">
    <div class="column is-half flex flex-center">
      <h1 class="is-center is-uppercase neon-sign">Hey There</h1>
    </div>
    <div class="column is-half hero-paragraph flex flex-start">
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
      <h2 class="is-uppercase is-full">skills</h2>
      <p class="is-left is-full">
      <span class="is-bold"> Skills: {</span><br/>
        &nbsp;<span class="is-bold">Frontend: [</span><br/>
          &nbsp;&nbsp;<span class="is-bold">Common: [</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, SCSS,<br/>
          &nbsp;&nbsp;<span class="is-bold">],</span><br/>
         &nbsp;&nbsp;<span class="is-bold">JS: [</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;jQuery,Handlebars.js, Anime.js, Axios, Apollo ,Cypress,<br/>
          &nbsp;&nbsp;<span class="is-bold">],</span><br/>
         &nbsp;&nbsp;<span class="is-bold">Frameworks:[</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Vue.js,Vuex<br/>
        &nbsp;&nbsp;<span class="is-bold">],</span><br/>
        &nbsp;&nbsp;<span class="is-bold">Backend: [</span><br/>
         &nbsp;&nbsp;&nbsp;&nbsp;PHP, mySQL, Smarty, Strapi, WordPress <br/>
        &nbsp;&nbsp;<span class="is-bold">],</span><br/>
        &nbsp;&nbsp;<span class="is-bold">Design: [</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator ],<br/>
        &nbsp;&nbsp;<span class="is-bold">Misc: [</span><br/>
         &nbsp;&nbsp;&nbsp;&nbsp;Ubuntu, bash, Git <br/>
        &nbsp;&nbsp;<span class="is-bold">],</span><br/>
      <span class="is-bold">}</span>
      </p>
    </div>
  </div>
  <div class="flex flex-center blog-wrapper">
    <div class="container flex flex-start">
      <h2 class="is-uppercase is-full">Playground</h2>
      <postsGrid :posts="this.posts" />
    </div>
  </div>
  <div class="flex flex-center container is-fluid padless">
    <h2 class="is-uppercase is-full">Some Art</h2>
    <galleryGrid :galleryItems="homePage?.gallery.items" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import postsGrid from '@/components/postsGrid.vue';
import galleryGrid from '@/components/galleryGrid.vue';

export default {
  name: 'Home',
  components: {
    postsGrid,
    galleryGrid,
  },
  computed: {
    ...mapGetters({
      posts: 'getBlog',
      homePage: 'getHomePage',
    }),
  },
};
</script>
