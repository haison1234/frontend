import { useState } from "react";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter todo"
      />
      <button
        onClick={() => {
          onAdd(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </>
  );
}

export default TodoForm;
