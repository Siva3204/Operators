import React from "react";

function Revision() {
  // styling
  const styles = {
    color: "blue",
    fontsize: "20px",
  };
  //   operator
  let a = 5;
  let b = 10;

  return (
    <>
      {a > b ? <h1>John</h1> : <h1>Hello jack</h1>}
      {/* embed code or self tag */}
      <img
        src="https://wallpapers.com/images/hd/best-profile-pictures-itr43vvimjrze9v3.jpg"
        alt="profile picture"
        height="400"
        width="300"
      />
      <h1 style={styles}>I am a Camera Man</h1>
    </>
  );
}

export default Revision;
