import styled from "styled-components";

export const StyledForm = styled.form`
  width: 520px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-content: center;
  grid-auto-flow: row;
`;

export const DisplayContainer = styled.div`
  width: 520px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`;

export const StyledLabel = styled.h3`
  margin-bottom: 4px;
  font-weight: inherit;
`;

export const DataField = styled.span`
  font-weight: bold;
`;
