import React, { useEffect, useRef, useState } from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { ButtonContainer, Container, StyledStack } from "./styles";
import TitleSection from "../Title-section";

class myStack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  isEmpty() {
    return this.top === 0;
  }

  push(element) {
    if (element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
  }

  pop() {
    if (this.top > 0) {
      this.top = this.top - 1;
      this.data.pop();
    }
  }

  getStack() {
    return this.data;
  }
}

const Stack = () => {
  const [stack, setStack] = useState(new myStack());
  const [wasChanged, setWasChanged] = useState(false);
  const input = useRef(null);

  const onPush = () => {
    stack.push(input.current);
    setWasChanged(true);
  };

  const onPop = () => {
    stack.pop();
    setWasChanged(true);
  };

  const isEmpty = () => {
    let answer = "";
    if (stack.isEmpty()) answer = "The stack is empty";
    else answer = "The stack is not empty";
    setWasChanged(true);
    alert(answer);
  };

  useEffect(() => {
    if (wasChanged) setWasChanged(false);
  }, [wasChanged]);

  return (
    <Container>
      <TitleSection label="Stack" />
      <Input
        ref={input}
        type="text"
        onChange={({ target: { value } }) => (input.current = value)}
      />
      <Button label="Push the item" onClick={onPush} />
      <ButtonContainer>
        <Button label="Pop" onClick={onPop} />
        <Button label="Verify if the stack is empty" onClick={isEmpty} />
      </ButtonContainer>
      <StyledStack>[{stack.getStack().join(", ")}]</StyledStack>
    </Container>
  );
};

export default Stack;
