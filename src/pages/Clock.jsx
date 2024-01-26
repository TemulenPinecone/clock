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
    <div className="flex justify-center mt-10">
      <div className="border py-10 px-20 text-7xl font-extralight">
        {date.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Clock;
