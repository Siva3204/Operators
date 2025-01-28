// import React from "react";
// import Child_C from "./Child_C";

// function Child_B({ name, balance }) {
//   return (
//     <div>
//       <h2>My name is {name} from Child B</h2>
//       <Child_C name={name} balance={balance} />
//     </div>
//   );
// }

// export default Child_B;

import React, { useContext } from "react";
import Child_C from "./Child_C";
import { data, data1, data2 } from "./Parent";

function Child_B() {
  const name = useContext(data);
  const balance = useContext(data1);
  const bank = useContext(data2);

  return (
    <div>
      <h2>
        My name is {name} and my bank name is {bank} and balance amount is{" "}
        {balance}
      </h2>
      <Child_C />
    </div>
  );
}

export default Child_B;
