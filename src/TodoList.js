import React, { useState } from "react";
import { useGlobalState } from "./GlobalState";

function TodoList() {
  const { state, dispatch } = useGlobalState();
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Nhập công việc..." 
      />
      <button onClick={handleAdd}>Thêm</button>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            {todo.text} 
            <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}>
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
