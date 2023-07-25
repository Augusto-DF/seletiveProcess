import React, { useState, useCallback } from "react";
import Input from "./Input";

import { DataField, DisplayContainer, StyledForm, StyledLabel } from "./styles";
import Button from "./Button";
import TitleSection from "../Title-section";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ERROR_INITIAL_STATE = {
  errorMessage: null,
  name: "",
  email: "",
  subject: "",
  message: "",
};

const VALIDATE_EMAIL_EXPRESSION =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Form = () => {
  const [formState, setFormState] = useState(INITIAL_STATE);
  const [error, setError] = useState(ERROR_INITIAL_STATE);
  const [showDisplay, setShowDisplay] = useState(false);

  const validateData = useCallback(() => {
    setError(ERROR_INITIAL_STATE);
    setShowDisplay(false);
    const mandatoryEmptyFields = Object.keys(formState).filter(
      (field) => !formState[field]
    );

    // Verify mandatory empty fields
    if (mandatoryEmptyFields.length) {
      mandatoryEmptyFields.forEach((field) =>
        setError((prevState) => ({
          ...prevState,
          [field]: "This field can't be empty",
        }))
      );
      return false;
    }
    // Validate email format
    else if (
      formState.email &&
      !VALIDATE_EMAIL_EXPRESSION.test(formState.email)
    ) {
      setError((prevState) => ({
        ...prevState,
        email: "Invalid format",
      }));
      return false;
    }

    return true;
  }, [formState, setError]);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (validateData()) setShowDisplay(true);
    },
    [validateData, error]
  );

  const onChange = useCallback(({ target: { name, value } }) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  return (
    <>
      <StyledForm>
        <TitleSection label="Contact Form" />
        <Input
          name="name"
          type="text"
          label="Name"
          onChange={onChange}
          errorMessage={error.name}
        />
        <Input
          name="email"
          type="email"
          label="Email"
          onChange={onChange}
          errorMessage={error.email}
        />
        <Input
          name="subject"
          type="text"
          label="Subject"
          onChange={onChange}
          errorMessage={error.subject}
        />
        <Input
          name="message"
          type="text-area"
          label="Message"
          onChange={onChange}
          errorMessage={error.message}
        />
        <Button
          name="submitButton"
          label="Enviar"
          type="submit"
          onClick={onSubmit}
        />
      </StyledForm>

      {showDisplay && (
        <DisplayContainer>
          <StyledLabel>
            Name: <DataField>{formState.name}</DataField>
          </StyledLabel>
          <StyledLabel>
            Email: <DataField>{formState.email}</DataField>
          </StyledLabel>
          <StyledLabel>
            Subject: <DataField>{formState.subject}</DataField>
          </StyledLabel>
          <StyledLabel>
            Message: <DataField>{formState.message}</DataField>
          </StyledLabel>
        </DisplayContainer>
      )}
    </>
  );
};

export default Form;
