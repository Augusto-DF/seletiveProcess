import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { List, Nav, StyledLink } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <List>
        <CustomLink to="/">Factorial</CustomLink>
        <CustomLink to="/palindrome">Palindrome</CustomLink>
        <CustomLink to="/contact-form">Contact Form</CustomLink>
        <CustomLink to="/stack">Stack</CustomLink>
        <CustomLink to="/bank-accounts">Bank Accounts</CustomLink>
        <CustomLink to="/file-reader">File Reader</CustomLink>
        <CustomLink to="/fibonacci-sequence">Fibonacci Sequence</CustomLink>
      </List>
    </Nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <StyledLink className={isActive ? "active" : ""}>
      <Link
        style={{ textDecoration: "none", color: "#1C244B" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </StyledLink>
  );
}

export default Navbar;
