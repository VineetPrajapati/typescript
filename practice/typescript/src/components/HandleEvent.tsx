import React from "react";
const HandleEvent = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button : ", e.currentTarget);
  };
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("On mouse move : ", e.currentTarget);
  };
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h1>Handling Events</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default HandleEvent;
