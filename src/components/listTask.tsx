
import { GeneralApp, Task, Props, Event, PropsEvents } from '../interfaces/generalApp'

export default function ListTask( propsEvent: PropsEvents<Task[], number>){

    const onDeleteTask = (id: number) =>{
        propsEvent.event(id)
    }
    return (
  
        <div>
            {propsEvent.props?.map( (task: Task) => (
                <div key={task.id}>
                    <p>{task.id}</p>
                    <p>{task.name}</p>
                    <button onClick={ () => onDeleteTask(task.id)}>Delete</button>
                </div>
               
            ))}
        </div>
        
        
    )
}
