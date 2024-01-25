import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      return clearInterval(timer);
    };
  });
  return (
    <div>
      <div> Яг одоо : {date.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
