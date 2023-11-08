import React, { useState } from "react";
import { render } from "react-dom";
import HomePage from "./Homepage";

export default function App(props) {
  return (
    <>
      <h1>Testing React Code</h1>
      <p>Hello {props.name}</p>

      <HomePage />
    </>
  );
}

const appDiv = document.getElementById("app");
render(<App name="jimbo" />, appDiv);
