<template>
  <article class="post column is-three" v-for="post in posts" :ref="postsRefs" v-bind:key="post">
    <div class="post-content">
    <span>
      {{ post.category.name }}
    </span>
    <img :src="env + post.image.url" />
    <p>{{ breakSentence(post.tech)}}</p>
    <h3>{{ post.title }}</h3>
    </div>
    <div class="post-toolbar">
      <a v-if="post.live" :href="post.live">live</a>
      <a v-if="post.git" :href="post.git">git</a>
    </div>
  </article>
</template>
<script>
export default {
  name: 'postsGrid',
  props: ['posts'],
  data() {
    return {
      postsRefs: [],
      env: process.env.VUE_APP_API_URI,
    };
  },
  methods: {
    setPostRef(elem) {
      if (elem) {
        this.postsRefs.push(elem);
      }
    },
    breakSentence(value) {
      return value ? value.split(' ').filter(Boolean) : '';
    },
  },
};
</script>
