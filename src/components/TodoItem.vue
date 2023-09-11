<script setup lang="ts">
import type { Todo } from '../types';
defineProps<{
    todo: Todo;
    checked: boolean;
    handleDelete: (id: string) => void;
}>();
</script>

<template>
    <div class="flex flex-wrap space-x-4 items-center content-center justify-between">
        <input
            type="checkbox"
            @input="(event) => $emit('update:checked', (event.target as HTMLInputElement).checked)"
            :checked="checked"
        />
        <span class="text-lg">{{ todo.name }}</span>
        <button class="w-8 text-2xl text-red-500 font-bold" @click="handleDelete(todo.id)">x</button>
    </div>
</template>
