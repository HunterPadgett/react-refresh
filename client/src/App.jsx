import { useState } from "react";
import "./App.css";
import AddTaskInput from "./AddTaskInput";
import TaskList from "./TaskList";

function App() {
 // array we will be storing our tasks in
 const [tasks, setTasks] = useState([]);
 // where we will store the value from the input box
 const [newTask, setNewTask] = useState("");

 //  grabbing the value from the input and updating the value of newTask to be whatever is typed into the input box
 function handleChange(e) {
  setNewTask(e.target.value);
 }

 // create a new task object every time the addTask btn is clicked
 function addTask() {
  const task = {
   id: tasks.length < 1 ? 1 : tasks.at(-1).id + 1,
   taskName: newTask, // this is the value captured from handleChange()
   completed: false,
  };
  // setTasks function is called to update the tasks state variable with a new array that contains all the existing tasks plus the new task that was just created.
  setTasks([...tasks, task]);
  setNewTask("");
 }

 // we pass this function as a prop to the taskList component where we then pass the task id in the fn call. then onclick, we filter out the task by its id and update the tasks array
 function deleteTask(taskId) {
  setTasks(tasks.filter(({ id }) => id !== taskId));
 }

 // we pass this function as a prop to the taskList component where we then pass the task id in the fn call. then onclick, the function creates a new object that spreads the task's properties (id, taskName, and completed) and sets completed to true if the task id matches the taskId passed into the fn. Otherwise, the function returns the original task unchanged.
 function completeToggle(taskId) {
  setTasks(
   tasks.map((task) =>
    task.id === taskId ? { ...task, completed: true } : task
   )
  );
 }

 return (
  <div className="App">
   {/* pass the functions needed as props to the component */}
   <AddTaskInput handleChange={handleChange} addTask={addTask} />

   {/* map over the tasks array, destructure each task, pass the props to the tasklist component, then render a tasklist component for every task */}
   <ul>
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
   </ul>
  </div>
 );
}

export default App;
