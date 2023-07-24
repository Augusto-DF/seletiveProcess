import styled from "styled-components";

export const StyledInput = styled.input`
  width: 520px;
  height: 50px;
  padding: 8px 16px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  border: ${({ hasError }) =>
    hasError ? "1px solid #c22f1b" : "1px solid #c7c3c2"};
  border-radius: 16px;
`;

export const StyledTextArea = styled.textarea`
  width: 520px;
  height: 220px;
  padding: 16px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  border: ${({ hasError }) =>
    hasError ? "1px solid #c22f1b" : "1px solid #c7c3c2"};
  border-radius: 16px;
`;

export const Error = styled.span`
  margin-top: 8px;
  color: #c22f1b;
  font-size: 12px;
  font-weight: bold;
  margin-left: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;
