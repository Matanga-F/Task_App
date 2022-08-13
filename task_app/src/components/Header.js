import React from 'react'
import Form from './Form'
import Dates from './Dates'

const Header = () => {
    
  return (
    <div className ="heading">
        <div className="container">
            <div className="grid">
                <div>
                <h1>Task Manager</h1>
                </div>
                <div>
                    <Dates />
                </div>
            </div>
        
        <p>What's the plan of today?</p>
        <Form />
        </div>
      
    </div>
  )
}

export default Header
