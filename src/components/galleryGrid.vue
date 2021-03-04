<template>
  <section class="container is-fluid padless flex flex-center gallery_wrap flex-stretch ">
    <div class="close" @click="closeGallery">X</div>
    <div class="arr arr-left" @click="goLeft">LEFT</div>
    <div class="arr arr-right" @click="goright">RIGHT</div>
    <div
      class="column is-three is-two-tablet is-full-mobile gallery flex flex-column flex-stretch"
      v-for="galleryItem in galleryItems"
      :ref="setGalleryRefs"
      v-bind:key="galleryItem"
      @click="galleryItemSelected"
    >
      <img
        class="gallery-image"
        v-if="galleryItem.url"
        :src="env + galleryItem.url"
      />
            <h4 class="gallery-heading bck_black is-white" v-if="galleryItem.caption">
        {{ galleryItem.caption }}
      </h4>
    </div>
  </section>
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
    galleryItemSelected(e) {
      document.querySelector('.gallery_wrap').classList.add('a');
      const targ = e.currentTarget;
      const targSiblings = [...targ.parentNode.children].filter(
        (sibling) => sibling !== targ,
      );
      targ.classList.add('a');
      targSiblings.forEach((element) => {
        if (element.classList.contains('a')) {
          element.classList.remove('a');
        }
      });
    },
    goLeft() {
      const activeItem = document.querySelector('.gallery.a');
      if (activeItem) {
        const prev = activeItem.previousSibling;
        if (prev) {
          prev.classList.add('a');
          activeItem.classList.remove('a');
        }
      }
    },
    goright() {
      const activeItem = document.querySelector('.gallery.a');
      if (activeItem) {
        const next = activeItem.nextSibling;
        if (next) {
          next.classList.add('a');
          activeItem.classList.remove('a');
        }
      }
    },
    closeGallery() {
      const activeItems = document.querySelectorAll('.gallery.a');
      if (activeItems) {
        activeItems.forEach((elem) => {
          elem.classList.remove('a');
        });
      }
      document.querySelector('.gallery_wrap').classList.remove('a');
    },
  },
};
</script>
