<script setup>
import { DeleteToDo } from '@/services';

const emits = defineEmits(['success'])
const { taskId } = defineProps({
    taskId: String
})

const deleteItem = async () => {
    const response = await DeleteToDo(taskId)
    if (response) {
        emits('success')
        document.getElementById(`delete_todo_${taskId}`).close()
    }
};

</script>
<template>
    <span class="material-symbols-outlined text-error cursor-pointer text-3xl" title="Delete"
        :onclick="`delete_todo_${taskId}.showModal()`">
        delete
    </span>
    <dialog :id="`delete_todo_${taskId}`" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="font-bold text-lg">Delete Item</h3>
            <p class="py-4 text-sm">Are you sure you want to delete this item. the deleted item will not be recovered </p>
            <div class="modal-action">
                <button class="btn btn-error" @click="deleteItem">
                    Delete
                </button>
                <form method="dialog">
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
</template>