<template>
  <!-- We are bnding a class to the below div when the todo satisfies a condition i.e, isComplete -->
  <div class="todo-item" v-bind:class="{
      'is-complete':todo.completed
      }">
    <p>
      <!-- Here when the checkbox is selected the function markComplete will be called -->
      <input type="checkbox" v-on:change="markComplete">
      {{todo.title}}
    </p>
    <button @click="$emit('del-todo',todo.id)" class="del">X</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
      const completedStatus = this.todo.completed;
      console.log("Status:", completedStatus);
      // Below logic is of no use
      // var todoStatus = this.todo.completed;
      // if(todoStatus!=true){
      //   todoStatus=true;
      //   console.log(this.todo.completed);
      // } else{
      //     todoStatus=false;
      //   console.log(this.todo.completed);
      // }
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
  text-decoration-color: red;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
