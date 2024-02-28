import { useState } from 'react'
import './App.css'
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

    const deleteTask = (index:number)=> {
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    }

    const updateTask = (index:number, text:string) => {
        const tasksCopy = [...tasks];
        tasksCopy[index] = text;
        setTasks(tasksCopy);
    }

    const addTask = () => {
        setTasks([...tasks, 'New Task']);
    }

    return (
        <div className='field'>
            <button onClick={addTask} className='btn new'>Add Task</button>
            {tasks.map((task, index) => <Task editTask={updateTask} removeTask={deleteTask} index={index} key={index + 1}>{task}</Task>)}
        </div>
    )
}

export default App
