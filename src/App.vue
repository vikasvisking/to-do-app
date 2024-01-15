<script setup>

import ToDoItems from '@/components/ToDoItem.vue';
import CreateToDo from '@/components/CreateToDo.vue';
import { onMounted, ref } from 'vue';
import { GetAllToDos } from './services';

const toDos = ref([])

const fetAllToDos = async () => {
  const response = await GetAllToDos();
  toDos.value = response
}
onMounted(() => {
  fetAllToDos()
});

</script>
<template>
  <div>
    <div class="navbar bg-primary text-primary-content">
      <div class="container mx-auto flex justify-between">
        <button class="btn btn-ghost text-xl">To-Do App</button>
        <CreateToDo @success="fetAllToDos" />
      </div>
    </div>
    <div class="container mx-auto p-4 md:p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ToDoItems :task="task" v-for="task in toDos" :key="task.id" @update="fetAllToDos" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
