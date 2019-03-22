<template>
  <div class="test">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  props: {
    testMessage: String
  },
  data() {
    return {
      message: "This is default test from data"
    };
  }
};
</script>

<style scoped>
h2 {
  margin: auto;
}
</style>
