<template>
  <div class="management">
    <Heroes />
    <Works />
    <Advantages />
    <Feedbacks />
  </div>
</template>

<script>
import Heroes from "../components/management/Heroes.vue";
import Works from "../components/management/Works.vue";
import Advantages from "../components/management/Advantages.vue";
import Feedbacks from "../components/management/Feedbacks.vue";

export default {
  name: 'ManagementView',
  components: {
    Heroes,
    Works,
    Advantages,
    Feedbacks,
  }
}
</script>