import React from "react";
import Form from "./components/Form";
import TitleSection from "./components/Title-section";
import { Container } from "./styles/styles";

const App = () => {
  return (
    <Container>
      <TitleSection label="Contact Form" />
      <Form />
    </Container>
  );
};

export default App;
