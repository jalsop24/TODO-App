import React, { useState } from "react";
import { render } from "react-dom";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import TodoListPage from "./TodoList";

export default function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo-list" element={<TodoListPage />} />
      </Routes>
    </Router>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
