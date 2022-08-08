import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="todoList_container">
      <ul className="contaienr__ul">{props.children}</ul>
    </section>
  );
}

export { TodoList };
