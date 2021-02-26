<template>
  <header class="flex flex-between">
    <div class="logo">
      siteLogo
    </div>
    <div id="nav" class="header flex flex-between">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
};
</script>
