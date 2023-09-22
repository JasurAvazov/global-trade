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

<style lang="scss" >
.empty {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  span {
    opacity: 0.6;
  }
}

.advantages,
.heroes,
.works,
.feedbacks {
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;

    @media (max-width: 576px) {
      font-size: 20px;
      text-align: center;
    }
  }

}
</style>