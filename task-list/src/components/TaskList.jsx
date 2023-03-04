import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../stylesheets/TaskList.css';
import Task from "./Task"

function TaskList() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        console.log(task);
    }

    return(
        <>
         <TaskForm />
         <div className="task-list-container">
            {
                tasks.map(task => <Task id={a} text={task.text} completed={task.completed} />)
            }
         </div>
        </>
    );
}

export default TaskList