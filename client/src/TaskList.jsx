import React from "react";

export default function TaskList({
 id,
 taskName,
 completed,
 deleteTask,
 completeToggle,
}) {
 return (
  <div className="list" key={id}>
   <ul>
    <div className="task">
     <li>
      <span style={{ backgroundColor: completed ? "green" : "white" }}>
       {taskName}
      </span>
      <button onClick={() => completeToggle(id)}>✅</button>
      <button onClick={() => deleteTask(id)}>❌</button>
     </li>
    </div>
   </ul>
  </div>
 );
}
