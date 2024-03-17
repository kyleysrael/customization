// ColorPicker.js
import { COLORS } from "@/constant/theme";
import React, { useState } from "react";

type ColorPickerProps = {
  color?: string;
  name?: string;
  onColorPicked: (name: string) => void;
};

const ColorPicker = ({ color, onColorPicked }: ColorPickerProps) => {
  const [showName, setShowName] = useState(false);
  const [name, setName] = useState("");

  const handleClick = () => {
    const pickedName = color ? color : "none";
    setName(pickedName);
    onColorPicked(pickedName);
  };

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        margin: "4px",
        zIndex: "4",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          background: color ? color : COLORS.black,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          cursor: "pointer",
          border: "0.1px solid #747264",
        }}
        onClick={handleClick}
      />
      {showName && (
        <div
          style={{
            position: "absolute",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            padding: "4px 8px",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            fontSize: "12px",
          }}
        >
          {color}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
