<template>
  <TheHeader />
  <router-view />
  <!-- <TheFooter /> -->
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
}
</script>

<style lang="scss">
@import './assets/fonts.css';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat';
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #252525;
  }
}

body {
  min-width: 320px;
}

body.of {
  overflow: hidden;
}


.container {
  max-width: 1200px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: black;
}

button {
  border: 0;
  cursor: pointer;
}
</style>
