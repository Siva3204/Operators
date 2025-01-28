import React, { useRef } from "react";

function UncontrolledForm() {
  const refObject = useRef();
  console.log(refObject);

  function handlesubmit() {
    e.preventDefault();
    console.log(refObject.current.value);
  }

  return (
    <div>
      <h2 style={{ color: "blue" }}>
        Learning Uncontrolledform and it is controlled by Dom only
      </h2>

      <form onSubmit={handlesubmit}>
        <input type="text" ref={refObject} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
