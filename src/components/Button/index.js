import React from 'react';
import './button.scss';

const Button = ({ btnName, btnWidth, btnDisable }) => {
  return (
    <button className={btnWidth} disabled={btnDisable}>
      {btnName}
    </button>
  );
};

export default Button;
