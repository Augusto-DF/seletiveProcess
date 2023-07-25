import styled from "styled-components";

export const Nav = styled.nav`
  width: 264px;
  height: 100vh;
  position: fixed;
  background-color: #ffffff;
`;

export const List = styled.ul`
  list-style: none;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 12px;
`;

export const StyledLink = styled.li`
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
`;
