<template>
  <header class="flex flex-between">
    <Logo />
    <span class="mobile-nav-switch" @click="toggleNav">
    </span>
    <div id="nav" class="nav flex flex-between" @click="closeNav">
      <router-link @click="closeNav" to="/">Home</router-link>
      <router-link @click="closeNav" to="/blog">Blog</router-link>
        <router-link @click="closeNav" to="/blog/category/javascript">javascript</router-link>
       <router-link @click="closeNav" to="/blog/category/css">css</router-link>
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
      e.target.parentElement.classList.toggle('a');
    },
    closeNav(e) {
      const parent = e.target.parentElement;
      if (parent.classList.contains('a')) {
        parent.classList.remove('a');
        console.log('nav a');
      }
    },
  },
};
</script>
