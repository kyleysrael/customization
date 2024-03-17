import Image from "next/image";
import React, { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  endIcon?: string;
  fullWidth?: boolean;
}

const Button = ({ children, onClick, endIcon, fullWidth }: ButtonProps) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: hover ? "#eee" : "#fff",
    color: hover ? "#444" : "#000",
    border: "1px solid #ccc",
    transition: "background-color 0.3s ease, color 0.3s ease",
    outline: "none",
    fontSize: "16px",
    display: "flex",
    gap: "8px",
    flexDirection: "row",
    alignItems: "center",
    width: fullWidth ? "100%" : "unset",
  } as React.CSSProperties;

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {children}
      {endIcon && <Image src={endIcon} alt="image" width={12} height={12} />}
    </button>
  );
};

export default Button;
