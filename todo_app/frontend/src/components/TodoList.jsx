import React from "react";
import styled from "styled-components";

import Header from "./Header";
import TodoItem from "./TodoItem";
import { fontSize, colours } from "../css/globalStyles";

const items = [
  {
    name: "First Item",
    body: "This is the first todo item. It is also the best item. Yes :)",
  },
  {
    name: "Second Item",
    body: "This is the second todo item. This is the second priority.",
  },
  {
    name: "Third Item",
    body: "This is the third todo item. Number 3",
  },
];

const TodoListWrapped = styled.div`
  font-family: "Helvetica";
  background-color: ${colours.pale_green};
  height: 100%;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: ${fontSize.large};
    background-color: green;
    padding: 0.5em;
    margin: 0;
    border-radius: 0.5em;
    box-shadow: 2px 5px 5px 1px black;
  }

  ul {
    list-style-type: none;
  }
`;

export default function TodoListPage(props) {
  return (
    <TodoListWrapped>
      <Header />
      <main>
        <h1>A TODO List</h1>
        <ul>
          {items.map((item) => (
            <li>
              <TodoItem name={item.name} body={item.body} />
            </li>
          ))}
        </ul>
      </main>
    </TodoListWrapped>
  );
}
