// import React from "react";
// import Child_A from "./Child_A";

// function Parent() {
//   const name = "Siva";
//   const balance = "Rs.1000";

//   return (
//     <div>
//       <Child_A name={name} balance={balance} />
//     </div>
//   );
// }

// export default Parent;

import { createContext } from "react";
import React from "react";
import Child_A from "./Child_A";

// 1. createContext();
// 2. contextProvider();
// 3. contextConsumer(); // Gets replaced with useContext Hook

// 1st step accompalist
const data = createContext();
const data1 = createContext();
const data2 = createContext();

function Parent() {
  const name = "Siva";
  const balance = "Rs.1000";
  const bank = "SBI";

  return (
    <div>
      {/* 2nd step accomplist */}
      <data.Provider value={name}>
        <data1.Provider value={balance}>
          <data2.Provider value={bank}>
            <Child_A />
          </data2.Provider>
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default Parent;
export { data, data1, data2 };
