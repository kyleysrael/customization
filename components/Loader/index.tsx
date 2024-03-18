import React from "react";
import { Html, useProgress } from "@react-three/drei";

// Loader component
export const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          borderRadius: "5px",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <span>Loading {progress.toFixed(2)}%</span>
      </div>
    </Html>
  );
};
