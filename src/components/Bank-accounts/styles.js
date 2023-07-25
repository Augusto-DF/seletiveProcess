import styled from "styled-components";

export const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ hasMessage }) =>
    hasMessage ? "auto auto" : "auto"};
  align-items: center;
  margin: 4px 0 24px 0;
`;

export const Container = styled.div`
  margin-top: 36px;
`;

export const Message = styled.span`
  margin-left: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #1a2143;
  font-weight: bold;
  justify-self: end;
`;
