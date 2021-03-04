<template>
  <footer id="contact" class="footer flex flex-center">
    <div class="footer-wrap flex flex-center">
    <div class="column flex-start is-full padless">
      <Logo />
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
