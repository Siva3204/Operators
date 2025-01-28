import React from "react";
import { useState, useCallback } from "react";
import Child_A from "./Child_A";

function UseCallback() {
  const [add, setadd] = useState(0);
  const learning = useCallback(() => {
    // some operations
  }, []);
  return (
    <div>
      <h1>learning useCallback</h1>
      <Child_A learning={learning} />
      <h1>{add}</h1>
      <button onClick={() => setadd(add + 1)}>Add</button>
    </div>
  );
}

export default UseCallback;
