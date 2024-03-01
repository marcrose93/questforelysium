import React, { useState, useEffect } from "react";
import calendarBG from "../images/calendarBG.png"

const DateTimeDisplay = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = `${(now.getMonth() + 1).toString().padStart(2, "0")}/
                              ${now.getDate().toString().padStart(2, "0")}/
                              ${now.getFullYear()}`;
      const hours = now.getHours() % 12 || 12;
      /* the padStart is for leading zeros if necessary*/
      const formattedTime = `${hours.toString().padStart(2, "0")} : ${now.getMinutes().toString().padStart(2, "0")} : ${now.getSeconds().toString().padStart(2, "0")} 
                             ${now.getHours() >= 12 ? "PM" : "AM"}`;
      
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      backgroundImage: `url(${calendarBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
      {/* <div>Date: {currentDate}</div> */}
      <div
      style={{
        fontFamily: 'Macondo Swash Caps, sans serif',
        padding: '0.85em',
        textShadow: '2px 2px 4px white',
        
      }}>{currentTime}</div>
    </div>
  );
};

export default DateTimeDisplay;
