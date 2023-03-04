import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
function TaskForm(props){
    const [input, setInput] = useState('')

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleShipping = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4.v4(),
            text: input,
            completed: false
        }
    }
    
    return(
        <form className='task-form' onSubmit={handleShipping}>
            <input type="text" className='task-input' placeholder='Write a task' name='text' onChange={handleChange}/>
            <button className='task-button'>Add task</button>
        </form>
    )
}

export default TaskForm