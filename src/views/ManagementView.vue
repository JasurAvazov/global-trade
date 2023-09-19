<template>
  <div class="management">
    <Hero />
    <Feedbacks />
    <President />
    <Check />
  </div>
</template>

<script>
import Hero from "../components/management/Hero.vue";
import Feedbacks from "../components/management/Feedbacks.vue";
import President from "../components/management/President.vue";
import Check from "../components/management/Check.vue";

export default {
  name: 'ManagementView',
  components: {
    Hero,
    Feedbacks,
    President,
    Check,
  }
}
</script>