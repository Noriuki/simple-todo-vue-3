export type Todo = {
    id: string;
    name: string;
    done: boolean;
};

export type NewTodo = Omit<Todo, 'id'>;
