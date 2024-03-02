import React, { useState } from "react";
import Lights from "../component/Lights.jsx";

const TrafficLights = () => {
  const [selectedLight, setSelectedLight] = useState("");

  
  const handleLightClick = (color) => {
    setSelectedLight(color);
  };

  const handleRandomColorClick = () => {
    const colors = ["red", "yellow", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setSelectedLight(randomColor);
  };

  
  return (
    <div className="Glowing-lights">
      <Lights
        redLight={selectedLight === "red" ? "glow" : ""}
        yellowLight={selectedLight === "yellow" ? "glow" : ""}
        greenLight={selectedLight === "green" ? "glow" : ""}
       


        onClickRed={() => handleLightClick("red")}
        onClickYellow={() => handleLightClick("yellow")}
        onClickGreen={() => handleLightClick("green")}
        onClickcycleLights={handleRandomColorClick}
         OnClickPurpleLight={handleAddPurpleLight}
      />
      
    </div>
  );
};

export default TrafficLights;
