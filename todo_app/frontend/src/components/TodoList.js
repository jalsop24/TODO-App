import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";

const items = [
  {
    name: "First Item",
    body: "This is the first todo item.",
  },
  {
    name: "Second Item",
    body: "This is the second todo item.",
  },
  {
    name: "Third Item",
    body: "This is the third todo item.",
  },
];

export default function TodoListPage(props) {
  return (
    <>
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
    </>
  );
}
