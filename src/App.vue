<template>
  <div id="app">
     <Todos v-bind:todos="todosList"/>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'

export default {
  name: "app",
  components: {
    Todos,
  },
  data(){
    return {
      todosList:[
        {
          id:1,
          title:"Todo 1",
          completed: false
        },
                {
          id:2,
          title:"Todo 2",
          completed: true
        },
                {
          id:3,
          title:"Todo 3",
          completed: false
        },
      ]
    }
  }
};
</script>

<style>

</style>
