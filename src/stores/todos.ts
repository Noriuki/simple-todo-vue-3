import type { NewTodo, Todo } from '@/types';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { computed, ref } from 'vue';

export const useTodos = defineStore('todos', () => {
    const todos = ref<Todo[]>([]);

    const newTodo = ref<NewTodo>({
        name: '',
        done: false,
    });

    const add = (): void => {
        if (newTodo.value.name.length < 3) return;

        todos.value.push({ id: uuidv4(), ...newTodo.value });
        newTodo.value = {
            name: '',
            done: false,
        };
    };

    const remove = (id: string): void => {
        const idx = todos.value.map((todo) => todo.id).indexOf(id);
        todos.value.splice(idx, 1);
    };

    const countTotal = computed(() => {
        return todos.value.length;
    });

    const countDone = computed(() => {
        return todos.value.filter((todo) => todo.done === true).length;
    });

    const countPending = computed(() => {
        return todos.value.filter((todo) => todo.done === false).length;
    });

    return { todos, newTodo, add, remove, countTotal, countDone, countPending };
});
