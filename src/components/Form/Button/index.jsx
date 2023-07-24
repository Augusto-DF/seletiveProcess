import React from "react";
import { StyledButton } from "./styles";

const Button = ({ name, label, type, onClick }) => {
  return (
    <StyledButton name={name} type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
