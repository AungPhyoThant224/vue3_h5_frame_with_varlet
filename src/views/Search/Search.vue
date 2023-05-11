<template>
  <div class="search-con">
    <div class="card">
      <var-date-picker v-model="date" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Search",
  setup() {
    const currentDate = new Date();
    const date = ref(currentDate)

    return {
      date,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: var(--box-shadow);
  background-color: var(--card-color);
  margin: 30px 20px;
  padding: 18px;
  border-radius: 8px;
}
</style>
