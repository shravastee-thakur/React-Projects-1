import React from "react";

const TodoList = (props) => {
  return (
    <li className="list-item">
        {props.item}
      <span className="icons">
        <i 
        onClick={() => props.deleteItem(props.index)}
        className="fa-solid fa-trash-can icon-delete"></i>
      </span>
    </li>
  );
};

export default TodoList;
