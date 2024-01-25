// import React, { useState, useEffect } from "react";

// export const Clock = () => {
//   const [date, setDate] = useState(new Date());
//   useEffect(() => {
//     const timer = setInterval(() => setDate(new Date()), 1000);
//     return function cleanup() {
//       clearInterval(timer);
//     };
//   });
//   return (
//     <div>
//       <p>Time : {date.toLocaleTimeString()}</p>
//     </div>
//   );
// };
