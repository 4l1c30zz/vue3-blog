<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
import { mapGetters } from 'vuex';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import BlogService from '@/services/BlogService';
// TODO: add a loader
export default {
  components: {
    Header,
    Footer,
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
}
</style>
