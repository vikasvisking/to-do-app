<script setup>
import { computed } from 'vue';
import { UpdateToDo } from '@/services'

const { task } = defineProps({
  task: {
    required: true
  }
})

const emits = defineEmits(['update', 'edit'])

const getDate = computed(() => new Date(task.date).toLocaleDateString('en', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}))

const markAsDone = async () => {
  if (!task.is_done) {
    await UpdateToDo(task.id, { ...task, done: true })
    emits('update')
  }
}

const openEdit = () =>  emits('edit', task.id)
</script>
<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title flex justify-between">
        {{ task.title }}
        <div>
          <span class="material-symbols-outlined text-primary cursor-pointer text-3xl" title="Edit" @click="openEdit">
            edit
          </span>
          <span class="material-symbols-outlined text-error cursor-pointer text-3xl" title="Delete">
              delete
            </span>
        </div>
      </h2>
      <p>{{ task.description }}</p>
      <div class="card-actions justify-between items-center flex">
        <span>{{ getDate }}</span>
        <button class="btn btn-primary" v-if="!task.done" @click="markAsDone">Mark as done</button>
        <span class="material-symbols-outlined text-success text-5xl" title="Completed" v-else>
          done_all
        </span>
      </div>
    </div>
  </div>
</template>