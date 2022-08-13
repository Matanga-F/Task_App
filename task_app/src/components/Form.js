import React, { useState } from 'react'

const Form = () => {
    const {text, setText} = useState({task: "", description: "", atendee: "", tiime: ""});
    const {task, setTask} = useState([]);

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        if (text){
            setTask({...task, [name]: value})
        }

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }



  return (
    <div>
        <form>
            <div id="grid">
                <div>
                <label htmlFor='task'>Add Task: </label><br />
                <input type="text" 
                name ="task"
                placeholder='Add task'
                id="task"
                onChange={handleChange}/><br />
                </div>
                <div>
                <label>Description: </label><br />
                <input type="text"
                name="description" 
                placeholder='Task contents'
                id="description" 
                onChange={handleChange} /><br />
                </div>
                <div>
                <label>Atendee: </label><br />
                <input type="email"
                placeholder='john@gmail.com'
                name="description" 
                id="email" 
                onChange={handleChange} /><br />
                </div>
                <div>
                <label>Time: </label><br />
                <input type="text"
                placeholder="23h59"
                name="description" 
                id="email" 
                onChange={handleChange} /><br />
                </div>
            </div>
            <button type="submit" className="btn" onSubmit={handleSubmit}>Add Task</button>
        </form>
        <div>
            <h4>No task to display</h4>
        </div>
        
    </div>
  )
}

export default Form
