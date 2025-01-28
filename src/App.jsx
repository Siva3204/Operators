import React, { useState, useCallback } from "react";
import "./App.css";
import Operator from "../Components/Operator";
import Fragments from "../Components/Fragments";
import Revision from "../Components/Revision";
import Eventlisteners from "../Components/Eventlisteners";
import UseMemo from "../Components/UseMemo";
import Parent from "../Components/Parent";
import UseCallback from "../Components/UseCallback";
import Child_A from "../Components/Child_A";
import ControlledForm from "../Components/ControlledForm";
import UseRef from "../Components/UseRef";
import UncontrolledForm from "../Components/UncontrolledForm";
import ControlledForm_2 from "../Components/ControlledForm_2";
import UnControlledForm_2 from "../Components/UnControlledForm_2";
function App() {
  return (
    <>
      {/* <Operator /> */}
      {/* <Fragments /> */}
      {/* <Revision /> */}
      {/* <Eventlisteners /> */}
      {/* <UseMemo /> */}
      {/* <Parent /> */}
      {/* <UseCallback /> */}
      {/* <ControlledForm /> */}
      {/* <UseRef /> */}
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm_2 /> */}
      <UnControlledForm_2 />
    </>
  );
}

export default App;

// here I am using App.css so,the content will be placed on center of the webpage
