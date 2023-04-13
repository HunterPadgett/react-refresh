import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import AddTaskInput from "./AddTaskInput";
import TaskList from "./TaskList";

// REACT CRUD TODO EXAMPLE
// function App() {
//  // array we will be storing our tasks in
//  const [tasks, setTasks] = useState([]);
//  // where we will store the value from the input box
//  const [newTask, setNewTask] = useState("");

//  //  grabbing the value from the input and updating the value of newTask to be whatever is typed into the input box
//  function handleChange(e) {
//   setNewTask(e.target.value);
//  }

//  // create a new task object every time the addTask btn is clicked
//  function addTask() {
//   const task = {
//    id: tasks.length < 1 ? 1 : tasks.at(-1).id + 1,
//    taskName: newTask, // this is the value captured from handleChange()
//    completed: false,
//   };
//   // setTasks function is called to update the tasks state variable with a new array that contains all the existing tasks plus the new task that was just created.
//   setTasks([...tasks, task]);
//   setNewTask("");
//  }

//  // we pass this function as a prop to the taskList component where we then pass the task id in the fn call. then onclick, we filter out the task by its id and update the tasks array
//  function deleteTask(taskId) {
//   setTasks(tasks.filter(({ id }) => id !== taskId));
//  }

//  // we pass this function as a prop to the taskList component where we then pass the task id in the fn call. then onclick, the function creates a new object that spreads the task's properties (id, taskName, and completed) and sets completed to true if the task id matches the taskId passed into the fn. Otherwise, the function returns the original task unchanged.
//  function completeToggle(taskId) {
//   setTasks(
//    tasks.map((task) =>
//     task.id === taskId ? { ...task, completed: true } : task
//    )
//   );
//  }

//  return (
//   <div className="App">
//    {/* pass the functions needed as props to the component */}
//    <AddTaskInput handleChange={handleChange} addTask={addTask} />

//    {/* map over the tasks array, destructure each task, pass the props to the tasklist component, then render a tasklist component for every task */}
//    <ul>
//     {tasks.map(({ id, taskName, completed }) => (
//      <TaskList
//       key={id}
//       id={id}
//       completed={completed}
//       taskName={taskName}
//       deleteTask={deleteTask}
//       completeToggle={completeToggle}
//      />
//     ))}
//    </ul>
//   </div>
//  );
// }

// LEARNING USEEFFECT & API FETCHING WITH REACT
// export default function App() {
//  const [textInput, setTextInput] = useState("");
//  const [age, setAge] = useState(0);

//  function handleChange(e) {
//   // console.log(e.target.value);
//   setTextInput(e.target.value);
//  }

//  async function fetchNameData() {
//   try {
//    const res = await Axios.get(
//     `https://api.agify.io/?name=${textInput.toLowerCase().trim()}`
//    );
//    console.log(res.data);
//    setAge(res.data.age);
//   } catch (e) {
//    console.log(e);
//   }
//  }

//  useEffect(() => {
//   fetchNameData();
//  }, []);

//  return (
//   <div className="App">
//    <div className="inputArea">
//     <label htmlFor="name">Name</label>
//     <input
//      id="name"
//      type="text"
//      placeholder="enter name"
//      onChange={handleChange}
//     />
//    </div>
//    <button onClick={fetchNameData}>Predictions</button>
//    <p>Predicted age: {age}</p>
//   </div>
//  );
// }

export default function App() {
 const [excuse, setExcuse] = useState(null);

 async function fetchExcuse(excuse) {
  try {
   const res = await Axios.get(
    `https://excuser-three.vercel.app/v1/excuse/${excuse}`
   );
   console.log(res.data[0]);
   setExcuse(res.data[0]);
  } catch (e) {
   console.log(e);
  }
 }

 return (
  <div>
   <h1>Generate excuse for...</h1>
   <button onClick={() => fetchExcuse("party")}>Party</button>
   <button onClick={() => fetchExcuse("family")}>Family</button>
   <button onClick={() => fetchExcuse("office")}>Office</button>
   <p>
    {excuse
     ? `${
        excuse?.category[0].toUpperCase() + excuse?.category.slice(1)
       } Excuse: `
     : ``}
    {excuse?.excuse}
   </p>
  </div>
 );
}
