import { TodoListState } from "./todoList";

export interface TodoContexProps {
    todoState: TodoListState;
    toggleTodo: (id: string) => void;
}