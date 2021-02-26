<template>
  <div class="column is-three"
   v-for="galleryItem in galleryItems"
    :ref="galleryItemRefs"
     v-bind:key="galleryItem"
     >
     <img v-if="galleryItem.url" :src="env + galleryItem.url"/>
     <h4 v-if="galleryItem.caption" >{{galleryItem.caption}}</h4>
  </div>
</template>
<script>
export default {
  name: 'galleryGrid',
  props: ['galleryItems'],
  data() {
    return {
      galleryItemRefs: [],
      env: process.env.VUE_APP_API_URI,
    };
  },
  methods: {
    setGalleryRefs(item) {
      return item ? this.galleryItemRefs.push(item) : false;
    },
  },
};
</script>
