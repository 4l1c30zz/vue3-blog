<template>
  <div class="flex flex-center container is-fluid hero">
    <div class="column is-half flex flex-start">
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
        <b>{ Frontend:</b><br/>[<b>Common: </b><br />[ HTML, CSS, SCSS, ], JS: <br />[
        jQuery, Handlebars.js, Anime.js, Axios, Apollo ,Cypress ] Frameworks:
        <br />[ Vue.js, Vuex] ],
      </p>
      <p class="is-left is-full">
        <b>Backend: </b><br/>[ PHP, mySQL, Smarty, Strapi, ],
      </p>
      <p class="is-left is-full">
        <b>Frameworks:</b><br />[ WordPress ],
      </p>
      <p class="is-left is-full">
        <b>Design: </b><br/>[ Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator ],
      </p>
      <p class="is-left is-full">
        <b> Misc: </b><br/>[Ubuntu, bash, Git ]<br/><b>}</b></p>
    </div>
  </div>
  <div class="flex flex-center blog-wrapper">
    <div class="container flex flex-start">
      <h2 class="is-uppercase is-full">Playground</h2>
      <postsGrid
        :posts="this.posts"
      />
    </div>
  </div>
    <div class="flex flex-center container is-fluid">
    <div class="column is-full flex flex-start">
      <h2 class="is-uppercase is-full">Unrelated Art</h2>
        <galleryGrid
        :galleryItems="homePage?.gallery.items"
         />
    </div>
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
