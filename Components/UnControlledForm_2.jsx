import React, { useRef } from "react";

function UnControlledForm_2() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const PasswordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Name:${nameRef.current.value},Email:${emailRef.current.value},Password:${PasswordRef.current.value}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      Name:
      <input type="text" ref={nameRef}></input>
      <br />
      email:
      <input type="text" ref={emailRef}></input>
      <br />
      Password:
      <input type="text" ref={PasswordRef}></input>
      <br />
      <button type="Submit">Submit</button>
    </form>
  );
}

export default UnControlledForm_2;
