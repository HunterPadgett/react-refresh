import React from "react";

export default function Job({ salary, position, company }) {
 return (
  <div>
   <p>{position}</p>
   <p>{company}</p>
   <p>{salary}</p>
  </div>
 );
}
