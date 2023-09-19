<template>
  <TheHeader />
  <!-- <Header /> -->
  <router-view/>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue"
import TheHeader from "./components/TheHeader.vue"
import Footer from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    TheHeader,
    Footer
  }
}
</script>

<style>
@import './assets/fonts.css';
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat';
  scroll-behavior: smooth;
}
.container{
  max-width: 1200px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
a{
  text-decoration: none;
  color: black;
}
button{
  border: 0;
  cursor: pointer;
}
</style>
