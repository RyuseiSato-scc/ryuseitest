import React from "react";
import { useNavigate } from "react-router-dom";

function Component54() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate("/component54"); // Navigate to the desired route
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      Click to go to Component 54
    </div>
  );
}

export default Component54;
