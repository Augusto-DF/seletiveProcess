import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 8px;
  justify-content: space-around;
`;

export const ButtonContainer = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const StyledStack = styled.span`
  justify-self: center;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;
