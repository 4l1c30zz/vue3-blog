<template>
  <header class="flex flex-between" >
    <Logo />
    <span class="mobile-nav-switch" @click="toggleNav"> </span>
    <div id="nav" class="nav flex flex-between" @click="closeNav">
      <router-link :to="{ name: 'Home' }">
        <span @click="closeNav"> Home</span>
        </router-link>
      <router-link :to="{ name: 'Blog' }">
        <span @click="closeNav"> Blog</span>
      </router-link>
      <router-link
        :to="{ name: 'BlogCategory', params: { category: 'javascript' } }"
      >
        <span @click="closeNav"> javascript</span>
        </router-link>
      <router-link :to="{ name: 'BlogCategory', params: { category: 'css' } }">
        <span @click="closeNav"> css</span>
        </router-link>
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
    closeNav() {
      const header = document.getElementsByTagName('header');
      if (header[0].classList.contains('a')) {
        header[0].classList.remove('a');
      }
    },
  },
};
</script>
