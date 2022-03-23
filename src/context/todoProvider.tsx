import { useReducer } from 'react';
import { TodoListState } from '../interfaces/todoList';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoListState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            description: 'comprar leche',
            completed: false
        },
        {
            id: '2',
            description: 'comprar pan',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}


interface Props {
    children: JSX.Element | JSX.Element[];
}




export const TodoProvider = ({ children }: Props) => {

    const [todoState, todoDispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id: string) => {
        todoDispatch({ type: 'toggleTodo', payload: { id } });
    }

    return (
        <TodoContext.Provider value={{ todoState, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    )
}