import { TodoList } from "../interfaces/todoList"
import { Props } from '../interfaces/generalApp'
import { useTodos } from "../hooks/useTodos"


export const ItemTask = ({ props }: Props<TodoList>): JSX.Element => {

    const { toggleTodo } = useTodos();

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