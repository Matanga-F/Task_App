import React, { useState } from 'react'

const Form = () => {
    const {values, setValues} = useState({task: "", description: ""});
    const {task, setTask} = useState([]);

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name] : value});

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(values.task && values.description){
            const addTask = {...values, id: new Date().getTime().toString()};
            setTask([...values, addTask]);
            setValues({task: "", description: ""});
        }
        
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
                value={values.task}
                onChange={handleChange}/><br />
                </div>
                <div>
                <label>Description: </label><br />
                <input type="text"
                name="description" 
                placeholder='Task contents'
                id="description" 
                value = {values.description}
                onChange={handleChange} /><br />
                </div>
                {/* <div>
                <label>Atendee: </label><br />
                <input type="email"
                placeholder='john@gmail.com'
                name="description" 
                id="email" 
                value = {values.atendee}
                onChange={handleChange} /><br />
                </div>
                <div>
                <label>Time: </label><br />
                <input type="text"
                placeholder="23h59"
                name="description" 
                id="email" 
                value = {values.time}
                onChange={handleChange} /><br />
                </div> */}
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>Add Task</button>
        </form>
        <div className='tasks'>
            <p>No task to display</p>
        </div>
        
    </div>
  )
}

export default Form
