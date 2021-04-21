<template>
  <footer id="contact" class="footer flex flex-center">
    <div class="footer-wrap flex flex-center">
      <div class="column flex-start is-full padless is-center">
        <Logo />
        <a
          href="mailto:4l1c30zz@gmail.com"
          class="is-bold is-uppercase is-underlined mail-link"
        >
          4l1c30zz@gmail.com
        </a>
      </div>
      <div class="footer-toolbar padless column is-full flex flex-between">
        <a href="https://github.com/4l1c30zz/" target="_blank" class="button">
          GitHub
        </a>
        <a
          href="https://www.behance.net/4l1c30zz/"
          target="_blank"
          class="button"
        >
          Behance
        </a>
        <a
          href="https://www.instagram.com/4l1c30zz/"
          target="_blank"
          class="button"
        >
          Instagram
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
import Logo from '@/components/logo.vue';

export default {
  name: 'Footer',
  components: {
    Logo,
  },
};
</script>
