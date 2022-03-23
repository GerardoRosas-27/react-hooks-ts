export interface TodoList{
    id: string;
    description: string;
    completed: boolean;
}
export interface TodoListState{
    todoCount: number;
    todos: TodoList[];
    completed: number;
    pending: number;
}