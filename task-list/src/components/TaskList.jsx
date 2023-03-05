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

    return(
        <>
         <TaskForm onSubmit={addTask} />
         <div className="task-list-container">
            {
                tasks.map(task => <Task id={task.id} text={task.text} completed={task.completed} />)
            }
         </div>
        </>
    );
}

export default TaskList