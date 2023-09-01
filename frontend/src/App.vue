<template>
  <nav-bar-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {NavBarComp, FooterComp}
}
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #010111;
  color: #F4F4F4;
}
</style>
