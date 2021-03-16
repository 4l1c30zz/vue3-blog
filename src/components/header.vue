<template>
  <header class="flex flex-between">
    <Logo />
    <span class="mobile-nav-switch" @click="toggleNav">
    </span>
    <div id="nav" class="nav flex flex-between">
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
        <router-link to="/blog/category/javascript">javascript</router-link>
       <router-link to="/blog/category/css">css</router-link>
    </div>
  </header>
</template>
<script>
import Logo from '@/components/logo.vue';

export default {
  name: 'Header',
  components: {
    Logo,
  },
  methods: {
    toggleNav(e) {
      const navigitionElem = document.getElementById('nav');
      navigitionElem.classList.toggle('a');
      e.target.classList.toggle('a');
      console.log('e', e.target);
    },
  },
};
</script>
