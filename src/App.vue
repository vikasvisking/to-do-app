<script setup>
import ToDoItems from '@/components/ToDoItem.vue';
import CreateToDo from '@/components/CreateToDo.vue';
</script>
<template>
  <div>
    <div class="navbar bg-primary text-primary-content">
      <div class="container mx-auto flex justify-between">
        <button class="btn btn-ghost text-xl">To-Do App</button>
        <CreateToDo />
      </div>
    </div>
    <div class="container mx-auto p-4 md:p-8">
      <ToDoItems />
    </div>
  </div>
</template>

<style scoped></style>
