import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function UseMemo() {
  const [Add, setAdd] = useState(0);
  const [Minus, setMinus] = useState(100);
  const [Multiple, setmultiple] = useState(1);
  const [divide, setDivide] = useState(200);
  const multiplication = useMemo(
    function Multiply() {
      console.log("*********");
    },
    [Add]
  );
  return (
    <div>
      <h1>Learning UseMemo hook</h1>
      <button onClick={() => setAdd(Add + 1)}>Add</button>
      <span>{Add}</span>
      <br />
      <br />
      <button onClick={() => setMinus(Minus - 1)}>Minus</button>
      <span>{Minus}</span>
      <br />
      <br />
      <button onClick={() => setmultiple(Multiple * 2)}>Multiply</button>
      <span>{Multiple}</span>
      <br />
      <br />
      <button onClick={() => setDivide(divide / 2)}>Divide</button>
      <span>{divide}</span>
    </div>
  );
}

export default UseMemo;

// use memo is used for not repeating rendering values or running values
