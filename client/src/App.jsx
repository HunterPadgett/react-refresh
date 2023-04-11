import { useState } from "react";
import "./App.css";
import AddTaskInput from "./AddTaskInput";
import TaskList from "./TaskList";

function App() {
 const [tasks, setTasks] = useState([]);
 const [newTask, setNewTask] = useState("");

 //  grabbing the value from the input and updating the value of newTask to be whatever is typed into the input box
 function handleChange(e) {
  setNewTask(e.target.value);
 }

 function addTask() {
  const task = {
   id: tasks.length < 1 ? 1 : tasks.at(-1).id + 1,
   taskName: newTask,
   completed: false,
  };
  setTasks([...tasks, task]);
 }

 function deleteTask(taskId) {
  setTasks(tasks.filter(({ id }) => id !== taskId));
 }

 function completeToggle(taskId) {
  // const updatedTasks = tasks.map((task) => {
  //  if (task.id === taskId) {
  //   return { ...task, completed: true };
  //  } else {
  //   return task;
  //  }
  // });
  setTasks(
   tasks.map((task) =>
    task.id === taskId ? { ...task, completed: true } : task
   )
  );
 }

 return (
  <div className="App">
   <AddTaskInput handleChange={handleChange} addTask={addTask} />
   {tasks.map(({ id, taskName, completed }) => (
    <TaskList
     key={id}
     id={id}
     completed={completed}
     taskName={taskName}
     deleteTask={deleteTask}
     completeToggle={completeToggle}
    />
   ))}
  </div>
 );
}

export default App;
