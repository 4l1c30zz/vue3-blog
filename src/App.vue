<template>
  <Header />
  <router-view />
</template>
<script>
import { mapGetters } from 'vuex';
import Header from '@/components/header.vue';
import BlogService from '@/services/BlogService';

export default {
  components: {
    Header,
  },
  mounted() {
    if (!this.homePage) {
      BlogService.getHome();
    }
    if (!this.posts) {
      BlogService.getPosts();
    }
  },
  computed: {
    ...mapGetters({
      homePage: 'getHomePage',
      posts: 'getBlog',
    }),
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
