<template>
<div>
    <!-- Always need a key when binding a list as in react so that each time the list is shown as it is. -->
    <div v-bind:key="todoItem.id" v-for="todoItem in todos">
       <TodoItem v-bind:todo="todoItem" v-on:del-todo="$emit('del-todo',todoItem.id)" />
    </div>
</div>    
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name: "Todos",
    components:{
        TodoItem,
    },
    props: ["todos"]
}
</script>

<style scoped>

</style>
