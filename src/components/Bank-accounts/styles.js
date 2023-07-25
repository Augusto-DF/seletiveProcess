import styled from "styled-components";

export const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ hasMessage }) =>
    hasMessage ? "auto 1fr" : "auto"};
  align-items: center;
  margin: 4px 0;
`;

export const Container = styled.div`
  margin-top: 24px;
`;

export const Message = styled.span`
  margin-left: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: ${({ type }) => (type === "message" ? "#1A2143" : "#69cc72}")};
  font-weight: bold;
`;
