// import React from "react";
// import Child_B from "./Child_B";

// function Child_A({ name, balance }) {
//   return (
//     <div>
//       <h2>
//         My name is {name} from Child A and balance is {balance}
//       </h2>
//       <Child_B name={name} balance={balance} />
//     </div>
//   );
// }

// export default Child_A;

// import React, { memo } from "react";

// function Child_A({ learning }) {
//   console.log("Child_A component");
//   return <div>Child_A</div>;
// }

// export default memo(Child_A);

import React from "react";
import Child_B from "./Child_B";

function Child_A() {
  return (
    <div>
      <Child_B />
    </div>
  );
}

export default Child_A;
