import React from "react";
import { StyledInput, StyledTextArea } from "./styles";

const Input = ({ name, type, label, onChange }) => {
  return type === "text-area" ? (
    <StyledTextArea
      name={name}
      type={type}
      placeholder={label}
      onChange={onChange}
      rows="15"
    />
  ) : (
    <StyledInput
      name={name}
      type={type}
      placeholder={label}
      onChange={onChange}
    />
  );
};

export default Input;
