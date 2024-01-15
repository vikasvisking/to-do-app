<script setup>
import { computed } from 'vue';
import { UpdateToDo } from '@/services'

const { task } = defineProps({
    task: {
        required: true
    }
})

const emits = defineEmits(['update'])

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
</script>
<template>
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">{{ task.title }}</h2>
            <p>{{ task.description }}</p>
            <div class="card-actions justify-between items-center flex">
                <span>{{ getDate }}</span>
                <button class="btn btn-primary" v-if="!task.done" @click="markAsDone">Mark as done</button>
            </div>
        </div>
    </div>
</template>