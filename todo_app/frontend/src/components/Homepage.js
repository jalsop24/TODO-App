import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function HomePage(props) {
  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
        <Link to="/todo-list"> TODO List </Link>
      </main>
    </>
  );
}
