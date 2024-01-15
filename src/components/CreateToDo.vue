<script setup>
import { computed, reactive, ref } from 'vue';
import { AddToDo } from '@/services';

const getToday = computed(() => new Date().toISOString().slice(0, 10))
const formData = reactive({
  title: '',
  description: '',
  date: getToday.value
});

const errors = ref({})

const validateForm = () => {
  const errorData = {};
  if (!formData.title) {
    errorData.title = 'Title is required ';
  } else if (formData.title?.length > 50) {
    errorData.title = 'Max 50 chars allowed'
  }
  if (!formData.date) {
    errorData.date = 'Date is required ';
  } else if (isNaN(new Date(formData.date))) {
    errorData.date = "Invalid date format"
  }
  errors.value = errorData;
  return Object.keys(errorData)?.length === 0
}


const submit = async () => {
  const isValid = await validateForm()
  console.log(formData, isValid)
  if (isValid) {
    const response = await AddToDo({
      ...formData,
      done: false,
      dueDate: formData.date
    })
    console.log(response, 'response')
  }
}

</script>
<template>
  <div>
    <button class="btn bg-primar text-xl" onclick="create_todo.showModal()">
      <span class="material-symbols-outlined">
        add
      </span>
      Create
    </button>
    <dialog id="create_todo" class="modal bg-gray-700 bg-opacity-75">
      <div class="modal-box">
        <h3 class="font-bold text-lg mb-4 text-primary">Add A To Do</h3>
        <form>
          <div class="mb-4">
            <div class="label">
              <span class="label-text">Title</span>
            </div>
            <input type="text" v-model="formData.title" maxlength="50" placeholder="Enter the title"
              class="input input-bordered w-full" :class="errors.title ? 'input-error' : 'input-primary'"/>
            <div class="label" v-if="errors.title">
              <span class="label-text">{{ errors.title }}</span>
            </div>
          </div>
          <div class="mb-4">
            <div class="label">
              <span class="label-text">Description</span>
            </div>
            <input type="text" v-model="formData.description" placeholder="Enter the description"
              class="input input-bordered input-primary w-full" />
          </div>
          <div class="mb-4">
            <div class="label">
              <span class="label-text">Select Date</span>
            </div>
            <input type="date" :min="getToday" v-model="formData.date" placeholder="Type here"
              class="input input-bordered w-full" :class="errors.date ? 'input-error' : 'input-primary'" />
              <div class="label" v-if="errors.date">
                  <span class="label-text">{{ errors.date }}</span>
                </div>
          </div>
        </form>
        <div class="modal-action">
          <button class="btn btn-primary" @click="submit">
            Add
          </button>
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
</div></template>