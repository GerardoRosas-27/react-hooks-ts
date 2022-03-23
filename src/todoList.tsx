import { ListTask } from "./components/listTask";
import { TitleTask } from "./components/titleTask";
import { TodoProvider } from "./context/todoProvider";

export const TodoList = (): JSX.Element =>{
    return(
        <TodoProvider>
            <TitleTask></TitleTask>
            <ListTask></ListTask>
        </TodoProvider>
    )
}