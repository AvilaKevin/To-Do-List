import React from "react";
import "./TodoItem.css";
import { AiFillDownCircle, AiFillCloseCircle } from "react-icons/ai";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <AiFillDownCircle />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <AiFillCloseCircle />
      </span>
    </li>
  );
}

export { TodoItem };
