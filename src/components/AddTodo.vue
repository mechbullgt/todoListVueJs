<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Enter Todo Title">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
import UUID from 'uuid';

export default {
    name:"AddTodo",
    data(){
      return {
        title:''
      }
    },
    methods:{
        addTodo(e){
            e.preventDefault();
            const newTodoObject = {
              id: UUID.v4(),
                title:this.title,
                completed:false
            }

            // Send this new object to the parent
            this.$emit('add-todo',newTodoObject);
            this.title='';
        }
    }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>
