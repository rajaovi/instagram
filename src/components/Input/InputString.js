import React, { useState } from "react";
import "./inputString.scss";

const InputString = ({
  inputType,
  inputReqired,
  inputPlaceholder,
  onChangeInput,
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    const inputVar = e.target.value;
    setInputValue(inputVar);
    onChangeInput(inputVar);
  };
  return (
    <input
      type={inputType}
      value={inputValue}
      required={inputReqired}
      placeholder={inputPlaceholder}
      onChange={handleInput}
    />
  );
};

export default InputString;
