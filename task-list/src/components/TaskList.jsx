import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../stylesheets/TaskList.css';
import Task from "./Task"

function TaskList() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if( task.text.trim()){
            task.text = task.text.trim();
            const tasksUpdated = [task, ...tasks]
            setTasks(tasksUpdated)
        }
    }
    const deleteTask = id =>{
        const tasksUpdated = tasks.filter(task => task.id !== id)
        setTasks(tasksUpdated);
    }
    const completeTask = id =>{
        const tasksUpdated = tasks.map( task => {
            if(task.id === id){
                task.completed = !task.completed
            }
            return task
        })
        setTasks(tasksUpdated);
    }
    return(
        <>
         <TaskForm onSubmit={addTask} />
         <div className="task-list-container">
            {
                tasks.map(task => <Task key={task.id} id={task.id} text={task.text} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} />)
            }
         </div>
        </>
    );
}

export default TaskList