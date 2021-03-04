<template>
    <div class="flex flex-center blog-wrapper">
      <div class="container flex flex-start">
        <h2 class="is-uppercase is-full">Playground</h2>
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
