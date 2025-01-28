import React, { useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("siva");
  const refElement = useRef();

  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handlechange(e) {
    refElement.current.style.color = "red";
    refElement.current.value = "kumar";
  }
  return (
    <div>
      <h1>Learning useRef</h1>
      <input
        ref={refElement}
        type="Text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={handlechange}>Handle Change</button>
    </div>
  );
}

export default UseRef;
