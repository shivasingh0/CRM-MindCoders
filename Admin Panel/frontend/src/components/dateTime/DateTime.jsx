import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [currentDateTime, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every second (for a real-time clock effect)
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format options for dd/mm/yyyy
  const dateFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  // Format options for HH:mm:ss
  const timeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <>
      <p>
        {currentDateTime.toLocaleDateString("en-GB", dateFormatOptions)}{" "}
        {currentDateTime.toLocaleTimeString("en-US", timeFormatOptions)}
      </p>
    </>
  );
};

export default DateTime;
