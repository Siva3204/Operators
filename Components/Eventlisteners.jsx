import React from "react";

function Eventlisteners() {
  // arrow functon for using button with parameters
  const handleclick = (name) => {
    alert(`click the message..! ${name}`);
  };

  // normal functon for using button without parameters
  function buttons() {
    alert(`click the message..!`);
  }
  //   onchange event button
  const handlechange = (event) => {
    console.log("input values: " + event.target.value);
  };
  return (
    <>
      <button onClick={buttons}>Click me</button>
      <button onClick={() => handleclick("siva")}>Greet Siva</button>
      <button onClick={() => handleclick("Adarsh")}>Greet Adarsh</button>
      <br />
      <br />
      <label for="Name">Name:</label>
      <input onChange={handlechange} />
    </>
  );
}

export default Eventlisteners;
