
import { useState } from 'react';
import './App.css';
import { ConfigApp, Task } from './interfaces/generalApp';
import ListTask from './components/listTask'
import FormTask from './components/formTask';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([])
  const [configApp, setConfigApp] = useState<ConfigApp>(
    {
      title: "List Task",
      content: 0
    }
  )

  const onAddTask = (task: Task): void => {
    setTasks([...tasks, task]);
  }
  const onDeleteTask = (id: number): void => {
    setTasks(tasks.filter(item=> item.id !== id ))
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>{configApp.title} <span>{configApp.content}</span></h1>
        </header>
      </div>
      <ListTask props={tasks} event={onDeleteTask}></ListTask>
      <FormTask event={onAddTask}></FormTask>
    </div>

  );
}

export default App;
