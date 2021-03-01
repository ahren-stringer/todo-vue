<template>
    <ul>
        <TodoItem
        v-for="todo of todos"
        :todo="todo"
        :key="todo.id"
        v-on:remove-todo="removeTodo"
        />
    </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    props:['todos'],
    methods:{
        removeTodo(id){
            this.$emit('remove-todo',id)
        }
    },
    components: {
        TodoItem
    }
}
</script>