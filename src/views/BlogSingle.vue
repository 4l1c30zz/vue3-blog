<template>
  <div
    class="post-header container is-fluid flex flex-center"
    v-if="singlePost"
  >
    <img class="post-image" :src="env + singlePost.image.url" />
    <div class="post-header-content bck_black is-white">
      <h1 class="is-uppercase">{{ singlePost.title }}</h1>
    </div>
  </div>
  <div class="container padless is-fluid flex-stretch flex flex-between">
    <div
      class="column flex flex-center is-three is-full-mobile bck_black is-white"
    >
      <div class="flex column is-full flex-center">
        <router-link
          class="single-post-category"
          :to="{
            name: `BlogCategory`,
            params: { category: singlePost?.category.name },
          }"
        >
          {{ singlePost?.category.name }}
        </router-link>
      </div>
      <div class="flex column is-full flex-center">
        <span
          v-for="tech in splitSentence(singlePost?.tech)"
          v-bind:key="tech"
          :ref="setTechRef"
          class="tag"
        >
          {{ tech }}
        </span>
      </div>
      <div class="flex column is-full flex-between">
        <a
          v-if="singlePost?.git"
          class="button"
          :href="singlePost.git"
          target="_blank"
          >github</a
        >
        <a
          v-if="singlePost?.live"
          class="button"
          :href="singlePost?.live"
          target="_blank"
          >Live</a
        >
        <a
          class="button"
          v-if="singlePost?.behance"
          :href="singlePost?.behance"
          target="_blank"
          >behance</a
        >
      </div>
    </div>
    <div class="column is-half is-full-mobile flex flex-start is-left">
      <p
        v-for="cont in splitParagraph(singlePost?.content)"
        v-bind:key="cont"
        :ref="setContRef"
      >
        {{ cont }}
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
// TODO: add posts inner nav
export default {
  props: ['id'],
  data() {
    return {
      techRefs: [],
      contRefs: [],
      env: process.env.VUE_APP_API_URI,
    };
  },
  computed: {
    ...mapGetters({
      posts: 'getBlog',
    }),
    singlePost() {
      const single = this.posts
        ? this.posts.filter((post) => post.id === this.id)
        : [];
      return single ? single[0] : [];
    },
  },
  methods: {
    splitSentence(value) {
      const postTech = value ? value.split(' ').filter(Boolean) : [];
      return postTech;
    },
    splitParagraph(value) {
      const postTech = value ? value.split(/\r?\n/).filter(Boolean) : [];
      return postTech;
    },
    setTechRef(elem) {
      if (elem) {
        this.techRefs.push(elem);
      }
    },
    setContRef(elem) {
      if (elem) {
        this.contRefs.push(elem);
      }
    },
  },
};
</script>
<style lang="scss">
.single-post-category {
  z-index: 2;
  position: relative;
  bottom: 0;
  font-weight: 900;
  font-size: 25px;
  margin-bottom: 1em;
  border: 3px solid white;
  padding: 0.5em;
  display: inline-block;
  bottom: 30px;
  text-shadow: 0 0.3em 0.6em color(_turquoise);
  box-shadow: 0.1em 0.3em 1em color(hot_pink),
    inset 0.1em 0.1em 0.5em color(hot_pink);
  animation: vibrate-2 5s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;
  transition: all 0.5s ease;
}
</style>
