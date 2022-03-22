import { type } from '@testing-library/user-event/dist/type'
import { ChangeEvent, FormEvent, useState } from 'react'
import { AiFillSave } from 'react-icons/ai'
import { Event, Task } from '../interfaces/generalApp'

type changeEventText = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function FormTask(addNewTask: Event<Task>): JSX.Element {

    const initialState = {
        id: 0,
        name: "",
        description: ""
    }
    const [task, setTask] = useState<Task>(initialState)
    const onChangeText = ({ target: { name, value } }: changeEventText) => {
        setTask({ ...task, [name]: value })
    }
    const onAddNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addNewTask.event(task);
        setTask(initialState);
    }

    return (
        <div>
            <form onSubmit={onAddNewTask}>
                <input onChange={onChangeText} value={task.id} type="text" name="id" />
                <input onChange={onChangeText} value={task.name} type="text" name="name" />
                <textarea onChange={onChangeText} value={task.description} name="description" id="" cols={30} rows={10}></textarea>

                <button>save
                    <AiFillSave></AiFillSave>
                </button>
            </form>
        </div>

    )
}