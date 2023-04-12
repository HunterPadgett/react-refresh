import React from "react";

export default function TaskList({
 id,
 taskName,
 completed,
 deleteTask,
 completeToggle,
}) {
 return (
  <div className="task" key={id}>
   <li>
    <span style={{ backgroundColor: completed ? "lightgreen" : "white" }}>
     {taskName}
    </span>
    <button onClick={() => completeToggle(id)}>✅</button>
    <button onClick={() => deleteTask(id)}>❌</button>
   </li>
  </div>
 );
}
