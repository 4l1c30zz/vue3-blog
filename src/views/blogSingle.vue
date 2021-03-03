<template>
  <h1>TITLE: {{ singlePost.title }}</h1>
  <p>TECH: {{ singlePost.tech }}</p>
  IMAGE : {{ singlePost.image }}<br />
  CONT: {{ singlePost.content }}<br />
  category: {{ singlePost.category }}<br />
  git: {{ singlePost.git }}<br />
  live: {{ singlePost.live }}<br />

  POSTST: {{ this.singlePost }}
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: ['id'],
  computed: {
    ...mapGetters({
      posts: 'getBlog',
    }),
    singlePost() {
      const single = this.posts
        ? this.posts.filter((post) => post.id === this.id)
        : [];
      return single[0];
    },
  },
};
</script>
