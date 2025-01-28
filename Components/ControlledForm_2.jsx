import React, { useState } from "react";

function ControlledForm_2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name:${name},Email:${email},Password:${Password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      email:
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      Password:
      <input
        type="text"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button type="Submit">Submit</button>
    </form>
  );
}

export default ControlledForm_2;
