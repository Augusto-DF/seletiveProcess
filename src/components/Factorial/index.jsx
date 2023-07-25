import React, { useState } from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { Container, Display } from "./styles";

/**
 * @description Calculate the factorial of a integer number ( recursive version ).
 * @param {Number} integer A integer number
 * @returns {Number} A factorial of integer number.
 */
const factorial = (integer = 1) => {
  console.log("number", integer);
  if (integer === 0 || integer === 1) return integer;
  else if (integer > 1) return integer * factorial(integer - 1);
};

const Factorial = () => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(false);
  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  const onClick = () => setResult(factorial(value));
  return (
    <Container>
      <Input
        name="factorial"
        type="number"
        label="Choose a number"
        onChange={onChange}
      />
      <Button label="Result" onClick={onClick} />
      {result && <Display>Result: {result}</Display>}
    </Container>
  );
};

export default Factorial;
