import React from "react";
import { StyledInput } from "./styles";

const Input = ({ name, type, label, onChange }) => {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={label}
      onChange={onChange}
    />
  );
};

export default Input;
