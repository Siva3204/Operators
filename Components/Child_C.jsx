// import React from "react";

// function Child_C({ name, balance }) {
//   return (
//     <div>
//       <h1>
//         My name is {name} and my balance is {balance}
//       </h1>
//     </div>
//   );
// }

// export default Child_C;

// import React from "react";
// import { data, data1, data2 } from "./Parent";

// function Child_C() {
//   return (
//     <div>
//       <data.Consumer>
//         {(name) => {
//           return (
//             <data1.Consumer>
//               {(balance) => {
//                 return (
//                   <data2.Consumer>
//                     {(bank) => {
//                       return (
//                         <h1>
//                           My name is {name} and my bank balance is {balance} and
//                           my bank name is {bank}
//                         </h1>
//                       );
//                     }}
//                   </data2.Consumer>
//                 );
//               }}
//             </data1.Consumer>
//           );
//         }}
//       </data.Consumer>
//     </div>
//   );
// }

// export default Child_C;

// /useContext Hook :-

import React, { useContext } from "react";
import { data, data1, data2 } from "./Parent";

function Child_C() {
  const name = useContext(data);
  const balance = useContext(data1);
  const bank = useContext(data2);

  return (
    <div>
      <h1>
        My name is {name} and my bank balance is {balance} and bank name is{" "}
        {bank}
      </h1>
    </div>
  );
}

export default Child_C;
