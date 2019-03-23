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
import axios from 'axios';

export default {
  name: "app",
  components: {
    AddTodo,
    Header,
    Todos,
  },
  data(){
    return {
      todosList:[]
    }
  },
  methods:{
    deleteTodoItem(id){
      this.todosList = this.todosList.filter(todoItem =>todoItem.id != id);
    },
    addTodoItem(newTodoObject){
      const {title, completed} = newTodoObject;
      // Adding toDo by API
      axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,
        completed
      })
      .then(res => this.todosList = [...this.todosList, res.data])
      .catch(err=> alert(err));

      /* 
      New todo is added to the bottom of the list
      this.todosList=[...this.todosList, newTodoObject];   
      
      Attempted to get the new todo on the top of the list
      this.todosList= this.todosList.unshift(newTodoObject);
      */      
    debugger;
    }
  },
   mounted(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response=>this.todosList = response.data)
      debugger
      // .catch(err=> (alert(err)));
    }
}
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
