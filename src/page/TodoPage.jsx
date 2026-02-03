import { useTodo } from "../hook/useTodo";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TodoPage() {
  const todo = useTodo();

  return (
    <div>
      <h1>Todo List</h1>

      <TodoForm onAdd={todo.addTodo} />

      <TodoList
        todos={todo.todos}
        editing={todo.editing}
        editingTitle={todo.editingTitle}
        setEditing={todo.setEditing}
        setEditingTitle={todo.setEditingTitle}
        onSave={todo.saveEdit}
        onDelete={todo.deleteTodo}
        onToggle={todo.toggle}
      />
    </div>
  );
}

export default TodoPage;
