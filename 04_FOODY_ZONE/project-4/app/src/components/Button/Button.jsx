import React from "react";
import "./Button.css";

const Button = ({ isSelected, text, handleClick }) => {
  return (
    <button className={isSelected ? "isSelected" : "aa"} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
