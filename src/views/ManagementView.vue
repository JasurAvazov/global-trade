<template>
  <div class="management">
    <Hero />
    <Feedbacks />
  </div>
</template>

<script>
import Hero from "../components/management/Hero.vue";
import Feedbacks from "../components/management/Feedbacks.vue";

export default {
  name: 'ManagementView',
  components: {
    Hero,
    Feedbacks,
  }
}
</script>