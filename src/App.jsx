import React from "react";
import Form from "./components/Form";
import TitleSection from "./components/Title-section";
import { Container } from "./styles/styles";
import BankAccounts from "./components/Bank-accounts";
import Factorial from "./components/Factorial";
import Palindrome from "./components/Palindrome";
import Fibonacci from "./components/Fibonacci";
import Stack from "./components/Stack";
import FileReader from "./components/File-reader";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Factorial />} />
          <Route path="palindrome" element={<Palindrome />} />
          <Route path="/contact-form" element={<Form />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/bank-accounts" element={<BankAccounts />} />
          <Route path="/file-reader" element={<FileReader />} />
          <Route path="/fibonacci-sequence" element={<Fibonacci />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
