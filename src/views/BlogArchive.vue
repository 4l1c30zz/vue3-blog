<template>
    <div class="flex flex-center blog-wrapper">
      <div class="container flex flex-start">
        <h1 class="is-uppercase is-full">Blog</h1>
        <h4 v-if="this.category" class="is-uppercase is-full padless">
          category: {{this.category}}</h4>
        <postsGrid
        :posts="this.category
        ? this.displayPostsCategory
        : posts"
        />
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import postsGrid from '@/components/postsGrid.vue';

export default {
  props: ['category'],
  components: {
    postsGrid,
  },
  computed: {
    ...mapGetters({
      posts: 'getBlog',
    }),
    displayPostsCategory() {
      return this.posts && this.category
        ? this.posts.filter((i) => i.category.name.includes(this.category))
        : [];
    },
  },
};
</script>
