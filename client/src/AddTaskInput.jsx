import React from "react";

export default function AddTaskInput({ handleChange, addTask }) {
 return (
  <div className="addTask">
   <input type="text" onChange={handleChange} />
   <button onClick={addTask}>add task</button>
   <br />
  </div>
 );
}
