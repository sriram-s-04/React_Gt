import React, { useEffect, useState } from "react";

const Live_Diffrence = () => {
  // live time diff b/w current date and any future date
  // let date1 = new Date(); // current date
  // let date2 = new Date('2025/06/12');
  // date2 = new Date(date2);
  // let date_in_s = Math.floor((date2.getTime() - date1.getTime()) / 1000);//for seconds
  // let date_in_mm = Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60)); //for minutes
  // let date_in_h = Math.floor(date_in_mm / 60); //for hours
  // let date_in_d = Math.floor(date_in_mm / (1000 * 60 * 60 * 24)); //for days

  const futureDate = new Date("2025/06/12");

  const calculateDifference = () => {
    const now = new Date();
    const diffInMs = futureDate - now;
    const totalSeconds = Math.floor(diffInMs / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateDifference());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateDifference());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {/* live time diff b/w current date and any future date */}
        <h1>Live Time Difference</h1>
        <h3>
          <strong>
            {timeLeft.days} days:{timeLeft.hours}:{timeLeft.minutes}:
            {timeLeft.seconds}
          </strong>
        </h3>
      </div>
    </>
  );
};

export default Live_Diffrence;
