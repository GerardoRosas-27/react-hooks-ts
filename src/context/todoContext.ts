import { createContext } from 'react';
import { TodoListState } from '../interfaces/todoList';

export interface TodoContexProps {
    todoState: TodoListState;
    toggleTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContexProps>({} as TodoContexProps);