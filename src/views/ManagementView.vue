<template>
  <div class="management">
    <Heroes />
    <Works />
    <Feedbacks />
  </div>
</template>

<script>
import Heroes from "../components/management/Heroes.vue";
import Works from "../components/management/Works.vue";
import Feedbacks from "../components/management/Feedbacks.vue";

export default {
  name: 'ManagementView',
  components: {
    Heroes,
    Works,
    Feedbacks,
  }
}
</script>