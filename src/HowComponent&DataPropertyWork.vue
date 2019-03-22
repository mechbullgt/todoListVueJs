<template>
  <div id="app">
    {{message}}
    <TestComp>
      {{message}}
    </TestComp>

    {{msg}}
  </div>
</template>

<script>
import TestComp from './components/Test.vue'

export default {
  name: "app",
  components: {
    TestComp,
  },
  data(){
    return {
      message:'Hello'
    }
  }
};
</script>

<style>

</style>
