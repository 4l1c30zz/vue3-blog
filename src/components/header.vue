<template>
  <header class="flex flex-between">
    <Logo />
    <div id="nav" class="header flex flex-between">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
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
};
</script>
