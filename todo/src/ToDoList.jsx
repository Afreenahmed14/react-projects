import React, { useState } from 'react'
import './ToDoList.css';

function ToDoList() {
    const [tasks, setTasks] = useState(["Get up "," Greet your parents"," Have breakfast"," Go for office"]);
    const [newTask, setNewTask]=useState("");

    function handleInput(e){
    setNewTask(e.target.value);
    }
    function addTask(){   
        setTasks(t=>[...t, newTask])
        setNewTask("");
      
    }
    function deleteTask(index){
        const UpdatedTasks = tasks.filter((_,i) => i!== index);
        setTasks(UpdatedTasks);
    }
return (
    <div>
        <h1>Morning Routine</h1>
    <div className='a'>
      <div>
        <input
          type="text"
          placeholder='Enter a task'
          value={newTask}
          onChange={handleInput}
        />
        <button className='add' onClick={addTask}>todo</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete' onClick={() => deleteTask(index)}>Done</button>
          </li>
        ))}
      </ol>
    </div>
    </div>
  );
}

export default ToDoList