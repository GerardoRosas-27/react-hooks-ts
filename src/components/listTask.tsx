
import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'
import { TodoList } from '../interfaces/todoList'
import { ItemTask } from './itemTask'

export const ListTask = () => {

    const { todoState } = useContext(TodoContext)
    const { todos } = todoState;
    console.log(todos)
    return (
        <ul>
            {todos?.map((task: TodoList) => (
                <ItemTask key={task.id} props={task}></ItemTask>
            ))}
        </ul>

    )
}
