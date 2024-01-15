<script setup>
</script>
<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">To Do</h2>
            <p>This is my First Task</p>
            <div class="card-actions justify-between items-center">
                <span>{{ new Date().toLocaleDateString('en', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }) }}</span>
                <button class="btn btn-primary">Mark as done</button>
            </div>
        </div>
    </div>
</template>