import { useState } from "react";
import "./App.css";
import Job from "./Job";
import User from "./User";
import GasPlanets from "./GasPlanets";

function App() {
 const users = [
  { name: "jack", age: 21 },
  { name: "jill", age: 25 },
  { name: "bill", age: 29 },
  { name: "phil", age: 23 },
 ];

 const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Jupiter", isGasPlanet: true },
  { name: "Venus", isGasPlanet: false },
  { name: "Neptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true },
 ];

 const [hideShowText, setHideShowText] = useState(true);
 const [btnText, setBtnText] = useState("hide");
 const [counter, setCounter] = useState(0);

 return (
  <div className="App">
   <div>
    <button
     onClick={() => {
      setHideShowText(!hideShowText);
      setBtnText(btnText === "hide" ? "show" : "hide");
     }}
    >
     {btnText}
    </button>
    {hideShowText && <h1>Hutner</h1>}
   </div>
   <div>
    <button
     onClick={() => {
      setCounter(counter + 1);
     }}
    >
     increase
    </button>
    <button
     onClick={() => {
      setCounter(counter - 1);
     }}
    >
     decrease
    </button>
    <button
     onClick={() => {
      setCounter(0);
     }}
    >
     set to 0
    </button>
    <br />
    {counter}
   </div>

   {/* {planets.map(
    ({ name, isGasPlanet }, i) =>
     isGasPlanet && <GasPlanets key={i} name={name} />
   )} */}
   <br />
   {/* {users.map(({ name, age }, i) => {
    return <User key={i} name={name} age={age} />;
   })} */}
   <br />
   {/* <Job salary={90000} position={"Senior SWE"} company={"Amazon"} />
   <Job salary={120000} position={"Principal SWE"} company={"Google"} />
   <Job salary={80000} position={"Junior SWE"} company={"Netflix"} /> */}
  </div>
 );
}

export default App;
