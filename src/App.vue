<template>
  <div id="app">
    <Header/>
         <AddTodo v-on:add-todo="addTodoItem" />
     <Todos v-bind:todos="todosList" v-on:del-todo="deleteTodoItem"/>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import Header from './components/layout/Header.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: "app",
  components: {
    AddTodo,
    Header,
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
  },
  methods:{
    deleteTodoItem(id){
      this.todosList = this.todosList.filter(todoItem =>todoItem.id != id);
    },
    addTodoItem(newTodoObject){
      this.todosList=[...this.todosList, newTodoObject];   
    }
  }
};
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
