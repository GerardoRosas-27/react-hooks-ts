import { ListTask } from "./components/listTask";
import { TodoProvider } from "./context/todoProvider";

export const TodoList = (): JSX.Element =>{
    return(
        <TodoProvider>
            <h1>Todo List:</h1>
            <ListTask></ListTask>
        </TodoProvider>
    )
}