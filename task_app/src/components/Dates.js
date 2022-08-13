import React from 'react'

const Dates = () => {
    const date = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nove", "Dec"];

    let month = months[date.getMonth()]
    let day = days[date.getDay()]
  return (
    <div>
      <p>{day}, {month} {date.getDay()}</p>
    </div>
  )
}

export default Dates
