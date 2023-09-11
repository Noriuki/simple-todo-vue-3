<script setup lang="ts">
import { useTodos } from '@/stores/todos';
import { storeToRefs } from 'pinia';
import TodoItem from './TodoItem.vue';

const store = useTodos();
const { todos, newTodo, countTotal, countDone, countPending } = storeToRefs(store);
const { add, remove } = store;
</script>

<template>
    <div class="w-1/3 h-auto m-auto bg-white p-8 rounded-md space-y-4">
        <h3 class="text-2xl text-center">TODOS</h3>
        <div class="w-full h-12 flex flex-wrap content-center items-center border border-blue-500 rounded-lg p-4">
            <input type="text" v-model="newTodo.name" class="h-full flex-1 outline-none" />
            <button @click="add" class="w-8 text-2xl text-blue-500 font-bold">+</button>
        </div>

        <div class="w-full flex flex-wrap">
            <span class="bg-blue-500 text-center text-white py-2 w-full">All: {{ countTotal }}</span>
            <span
                class="bg-green-500 text-center text-white py-2"
                :style="{ width: (countDone / countTotal) * 100 + '%' }"
                v-if="countDone"
                >Done: {{ countDone }}</span
            >
            <span
                class="bg-red-500 text-center text-white py-2"
                :style="{ width: (countPending / countTotal) * 100 + '%' }"
                v-if="countPending"
                >Pending: {{ countPending }}</span
            >
        </div>
        <TodoItem
            v-for="todo of todos"
            :key="todo.id"
            :todo="todo"
            :handle-delete="remove"
            v-model:checked="todo.done"
        />
    </div>
</template>
