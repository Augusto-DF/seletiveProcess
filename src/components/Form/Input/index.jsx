import React from "react";
import { StyledInput, StyledTextArea, Error } from "./styles";

const Input = ({
  name,
  type,
  label,
  onChange,
  errorMessage = null,
  value = undefined,
}) => {
  return type === "text-area" ? (
    <div>
      <StyledTextArea
        name={name}
        type={type}
        placeholder={label}
        onChange={onChange}
        rows="15"
        hasError={!!errorMessage}
        value={value ?? value}
      />
      {errorMessage && <Error>{errorMessage}</Error>}
    </div>
  ) : (
    <div>
      <StyledInput
        name={name}
        type={type}
        placeholder={label}
        onChange={onChange}
        hasError={!!errorMessage}
        value={value ?? value}
      />
      {errorMessage && <Error>{errorMessage}</Error>}
    </div>
  );
};

export default Input;
