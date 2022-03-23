import { useTodos } from "../hooks/useTodos"

export const TitleTask =() =>{
    const { pendingTodos } = useTodos();
    return (
        <h1>Todo List: {pendingTodos}</h1>
    )
}