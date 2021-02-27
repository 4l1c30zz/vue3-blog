<template>
  <footer id="contact" class="footer flex flex-center">
    <div class="column is-full">
      <Logo />
    </div>
    <div class="footer-toolbar column is-full flex-between">
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
