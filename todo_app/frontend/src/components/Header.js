import React from "react";
import { Link } from "react-router-dom";

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
