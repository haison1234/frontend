import { useState, useEffect } from "react";

export function useTodo() {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // LOAD
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // ADD
  const addTodo = async (title) => {
    if (!title) return;

    const res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  // EDIT
  const saveEdit = async (id) => {
    if (!editingTitle) return;

    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editingTitle }),
    });

    const updated = await res.json();
    setTodos(todos.map(t => (t._id === updated._id ? updated : t)));
    setEditing(null);
    setEditingTitle("");
  };

  // DELETE
  const deleteTodo = async (id) => {
    const ok = window.confirm("Are you sure you want to delete this todo?");
    if(!ok) return;
    await fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" });
    setTodos(todos.filter(t => t._id !== id));
  };

  //toggle
  const toggle = async (id) => {
    const res= await fetch(`http://localhost:3000/todos/${id}/toggle`, {
    method: "PATCH",
    }
    );
    const updateCompleted = await res.json();
    setTodos(todos.map(t=>(t._id === updateCompleted._id ? updateCompleted : t)));
  }
  return {
    todos,
    editing,
    editingTitle,
    setEditing,
    setEditingTitle,
    addTodo,
    saveEdit,
    deleteTodo,
    toggle,
  };
}
