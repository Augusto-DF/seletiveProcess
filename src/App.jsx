import React from "react";
import Form from "./components/Form";
import TitleSection from "./components/Title-section";
import { Container } from "./styles/styles";
import BankAccounts from "./components/Bank-accounts";
import Factorial from "./components/Factorial";
import Palindrome from "./components/Palindrome";

const App = () => {
  return (
    <Container>
      <TitleSection label="Factorial" />
      <Factorial />
      <TitleSection label="Palindrome" />
      <Palindrome />
      <TitleSection label="Contact Form" />
      <Form />
      <TitleSection label="Bank Accounts" />
      <BankAccounts />
    </Container>
  );
};

export default App;
