<template>
  <div>
    <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: "App",
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t=> t.id !==id)
    },
  },
  data() {
    return {
      todos: [
        { id: 1, item: "Задача1", completed: false },
        { id: 2, item: "Задача2", completed: false },
        { id: 3, item: "Задача3", completed: false },
      ],
    };
  },
  components: {
    TodoList,
  },
};
</script>