import { useTodos } from '../hooks/useTodos'
import { TodoList } from '../interfaces/todoList'
import { ItemTask } from './itemTask'

export const ListTask = () => {

    const { todos } = useTodos();
    console.log(todos)
    return (
        <ul>
            {todos?.map((task: TodoList) => (
                <ItemTask key={task.id} props={task}></ItemTask>
            ))}
        </ul>

    )
}
