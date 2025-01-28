import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("siva");
  const [Password, setPassword] = useState("");

  //   function handleChange(e) {
  //     console.log(e.target.name);
  //     if (e.target.name == "firstName") {
  //       const capsName = e.target.value.toUpperCase();
  //       setName(capsName);
  //     } else if (e.target.name == "lastName") {
  //       const lastName = e.target.value.toUpperCase();
  //       setLastName(lastName);
  //     } else {
  //       const pswd = e.target.value.toUpperCase();
  //       setPassword(pswd);
  //     }
  //   }
  //  ............. or..........
  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value.toUpperCase());
  }
  function handleSubmit(e) {
    console.log(e.target.value);
    setPassword(e.target.value.toUpperCase());
  }

  return (
    <div>
      <form>
        Name:
        <input
          type="text"
          name="siva"
          onChange={handleChange}
          value={name}
        ></input>
        <br />
        Password:
        <input
          type="text"
          name="adi"
          value={Password}
          onChange={handleSubmit}
        ></input>
        <br />
        city:<input type="text"></input>
      </form>
    </div>
  );
}

export default ControlledForm;
