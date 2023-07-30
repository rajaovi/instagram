import React from "react";
import "./button.scss";

const Button = ({ btnName, btnWidth }) => {
  return <button className={btnWidth}>{btnName}</button>;
};

export default Button;
