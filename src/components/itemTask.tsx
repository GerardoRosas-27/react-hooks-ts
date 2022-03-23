import { TodoList } from "../interfaces/todoList"
import { Props } from '../interfaces/generalApp'
import { TodoContext } from "../context/todoContext"
import { useContext } from "react"


export const ItemTask = ({ props }: Props<TodoList>): JSX.Element => {

    const { toggleTodo } = useContext(TodoContext)

    const handleDoubleClick = () => {
        toggleTodo(props.id);
    }

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: props.completed ? 'line-through' : ''
        }}
            onDoubleClick={ handleDoubleClick }>
            {props.description}
        </li>
    )
}