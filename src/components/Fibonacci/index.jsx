import React, { useState } from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { Container, Display } from "./styles";
import TitleSection from "../Title-section";

/**
 * Calculate what's the nth number in the Fibonacci sequence.
 * @param {Number} nth
 * @returns return the value of the nth number in Fibonacci sequence
 */
const fibonacci = (nth) => {
  if (nth < 2) return nth;
  return fibonacci(nth - 1) + fibonacci(nth - 2);
};

const Fibonacci = () => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(false);
  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  const onClick = () => setResult(fibonacci(value));
  return (
    <Container>
      <TitleSection label="Fibonacci Sequence" />
      <Input
        name="fibonacci"
        type="number"
        label="Choose a position of the Fibonacci sequence"
        onChange={onChange}
      />
      <Button label="Result" onClick={onClick} />
      {result && <Display>Result: {result}</Display>}
    </Container>
  );
};

export default Fibonacci;
