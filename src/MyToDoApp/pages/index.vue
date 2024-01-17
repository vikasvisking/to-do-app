<script setup>

import ToDoItem from '../components/ToDoItem.vue';
import CreateToDo from '../components/CreateToDo.vue';
import { onMounted, ref } from 'vue';
import { GetAllToDos } from '../services';

const toDos = ref([])
const editId = ref(null)

const fetAllToDos = async () => {
  const response = await GetAllToDos();
  toDos.value = [ ...response ]
  handleEdit(null)
}

const handleEdit = (id) => {
  editId.value = id
};

onMounted(() => {
  fetAllToDos()
});

</script>
<template>
  <div>
    <div class="navbar bg-primary text-primary-content">
      <div class="container mx-auto flex justify-between">
        <button class="btn btn-ghost text-xl">To-Do App</button>
        <CreateToDo @success="fetAllToDos" :key="editId" :editId="editId" @close="handleEdit" />
      </div>
    </div>
    <div class="container mx-auto p-4 md:p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="toDos.length > 0">
        <ToDoItem :task="task" v-for="(task) in toDos" :key="task.id + task.date" @update="fetAllToDos" @edit="handleEdit" />
      </div>
      <div v-else class="flex flex-col w-full justify-center items-center p-4 h-full my-10">
        <h2 class="text-3xl lg:text-4xl mb-4">
          No tasks yet. Try creating some new tasks.
        </h2>
      </div>
    </div>
  </div>
</template>
