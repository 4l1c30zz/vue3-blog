<template>
  <div class="flex flex-center container is-fluid hero">
    <div class="column is-half flex flex-center">
      <h1 class="is-center is-uppercase neon-sign">Hey There</h1>
    </div>
    <div class="column is-half hero-paragraph flex flex-start">
      <p class="is-left">
        My name is Alice.
      </p>
      <p class="is-left">
        I'm a self-taught developer that loves bring concepts to life and explore new things :)
      </p>
      <p class="is-left">
        Favorite stuff :<br/>
        experimental music, art, casual games, strong coffee and fresh challenges
      </p>
    </div>
  </div>
  <div class="flex flex-center container">
    <div class="column is-full flex flex-start">
      <h2 class="is-uppercase is-full">skills</h2>
      <p class="is-left is-full">
        <span class="is-bold"> Skills: {</span><br />
        &nbsp;<span class="is-bold">Frontend: [</span><br />
        &nbsp;&nbsp;<span class="is-bold">Common: [</span> HTML, CSS, SCSS,
        <span class="is-bold">],</span><br />
        &nbsp;&nbsp;<span class="is-bold">JS: [</span>
        jQuery,Handlebars.js, Anime.js, Axios, Apollo ,Cypress,
        <span class="is-bold">],</span><br />
        &nbsp;&nbsp;<span class="is-bold">Frameworks:[</span> Vue.js + Vuex
        <span class="is-bold">],</span><br />
        &nbsp;<span class="is-bold">],</span><br />
        &nbsp;<span class="is-bold">Backend: [</span>
        PHP, mySQL, Smarty, Strapi, WordPress
        <span class="is-bold">],</span><br />
        &nbsp;<span class="is-bold">Design: [</span> Figma, Adobe XD, Adobe
        Photoshop, Adobe Illustrator <span class="is-bold">],</span><br />
        &nbsp;<span class="is-bold">Misc: [</span> Ubuntu, bash, Git
        <span class="is-bold">],</span><br />
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
