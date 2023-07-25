import React from "react";
import Form from "./components/Form";
import TitleSection from "./components/Title-section";
import { Container } from "./styles/styles";
import BankAccounts from "./components/Bank-accounts";

const App = () => {
  return (
    <Container>
      <TitleSection label="Contact Form" />
      <Form />
      <TitleSection label="Bank Accounts" />
      <BankAccounts />
    </Container>
  );
};

export default App;
