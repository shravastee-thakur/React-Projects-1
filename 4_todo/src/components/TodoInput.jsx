import React, { useState } from "react";

const TodoInput = ({ addList }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="add-btn"
        onClick={() => {
          addList(inputText)
          setInputText("")
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
