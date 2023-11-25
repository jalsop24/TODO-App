import React from "react";


export default function TodoItem(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.body}</p>
    </div>
  );
}
