import React from "react";
import "./spriteImage.scss";

const SpriteImage = ({ iconName }) => {
  return <i className={`spriteImage ${iconName}`}></i>;
};

export default SpriteImage;
