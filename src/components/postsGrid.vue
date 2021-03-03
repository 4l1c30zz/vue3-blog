<template>
  <article
    class="post column is-three"
    v-for="post in posts"
    :ref="setPostRef"
    v-bind:key="post"
  >
    <div class="post-category is-uppercase">
      <router-link
        :to="{ name: `blogCategory`, params: { category: post.category.name } }"
      >
        {{ post.category.name }}
      </router-link>
    </div>
    <div class="post-content flex flex-center flex-column">
      <img :src="env + post.image.url" class="post-thumbnail" />
      <div class="post-tech flex flex-center">
        <span
          v-for="tech in splitSentence(post.tech)"
          v-bind:key="tech"
          :ref="setTechRef"
          class="tag"
        >
          {{ tech }}
        </span>
      </div>
      <router-link
      class="button"
      :to="{ name: `blogSingle`, params: { id: post.id } }"
      >
       full txt
      </router-link>
    </div>
    <h3 class="post-title is-center is-uppercase">{{ post.title }}</h3>
    <div class="post-toolbar flex flex-between">
      <a class="button" v-if="post.live" :href="post.live">live</a>
      <a class="button" v-if="post.git" :href="post.git">git</a>
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
      techRefs: [],
      env: process.env.VUE_APP_API_URI,
    };
  },
  methods: {
    setPostRef(elem) {
      if (elem) {
        this.postsRefs.push(elem);
      }
    },
    setTechRef(elem) {
      if (elem) {
        this.techRefs.push(elem);
      }
    },
    splitSentence(value) {
      const postTech = value ? value.split(' ').filter(Boolean) : [];
      return postTech;
    },
  },
};
</script>
