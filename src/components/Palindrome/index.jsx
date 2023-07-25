import React, { useState } from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { Container, Display } from "./styles";
import TitleSection from "../Title-section";

/**
 * @description Verify if a string is a palindrome. ( recursive version )
 * @param {String} string Word or sentence
 * @param {Number} start Right index
 * @param {Number} end Left index
 * @returns {String} it's a palindrome (when true), it's not a palindrome (when false)
 */
const palindrome = (string, start = 0, end = null) => {
  const formattedString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (!end) end = formattedString.length - 1;

  console.log("Right index:", start, "letter:", formattedString[start]);
  console.log("Left index:", end, "letter:", formattedString[end]);

  if (formattedString[start] !== formattedString[end])
    return "it's not a palindrome";
  else if (
    formattedString[start] === formattedString[end] &&
    (start + 1 === end || start === end)
  )
    return "it's a palindrome";
  return palindrome(formattedString, start + 1, end - 1);
};

const Palindrome = () => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(false);
  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  const onClick = () => setResult(palindrome(value));
  return (
    <Container>
      <TitleSection label="Palindrome" />
      <Input
        name="palindrome"
        type="text"
        label="Write a sentence or a word"
        onChange={onChange}
      />
      <Button label="It's a palindrome?" onClick={onClick} />
      {result && <Display> {result}</Display>}
    </Container>
  );
};

export default Palindrome;
