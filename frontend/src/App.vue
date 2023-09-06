<template>
  <nav-bar-comp/>
  <router-view class="fit"/>
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
  /* background-image: url('../public/stars.png');
  background-size: 50px;
  background-position: 50% 20%;
  background-attachment: fixed; */
  color: #F4F4F4;
}

.fit {
  min-height: 75vh;
}
</style>
