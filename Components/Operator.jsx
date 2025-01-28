import React from "react";
import "./Heading.css";
function formatDate(date) {
  return date.toLocaleString();
}
function Operator() {
  const isLoggedIn = false;

  const headingstyle = {
    color: "green",
    fontsize: "24px",
  };
  return (
    <div>
      {isLoggedIn ? <h1>welcome back!</h1> : <h1>please login..!</h1>}

      <h1 style={headingstyle}>Today's date is:{formatDate(new Date())}</h1>

      <h1 className="heading">Hello World using React ....</h1>
    </div>
  );
}

export default Operator;
