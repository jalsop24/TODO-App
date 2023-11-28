import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 0.5em;
  background-color: white;
  border-bottom-style: inset;
`;

export function Navbar(props) {
  return (
    <nav>
      <Link to="/"> Home </Link>
    </nav>
  );
}

export default function Header(props) {
  return (
    <header>
      <Navbar />
    </header>
  );
}
