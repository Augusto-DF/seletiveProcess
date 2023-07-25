import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #7696e3;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  border-color: transparent;
  justify-self: ${({ justifyEnd }) => (justifyEnd ? "end" : "start")};
`;
