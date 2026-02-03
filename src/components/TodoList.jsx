function TodoList({
  todos,
  editing,
  editingTitle,
  setEditing,
  setEditingTitle,
  onSave,
  onDelete,
  onToggle,
}) {
  return (
    <table>
      <tbody>
        {todos.map(todo => {
          if (editing && todo._id === editing._id) {
            return (
              <tr key={todo._id}>
                <td>
                  <input
                    value={editingTitle}
                    onChange={e => setEditingTitle(e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => onSave(todo._id)}>Save</button>
                  <button onClick={() => setEditing(null)}>Cancel</button>
                </td>
              </tr>
            );
          }

          return (
            <tr key={todo._id}>
              <td>{todo.title}</td>
              <td>
                <button
                  onClick={() => {
                    setEditing(todo);
                    setEditingTitle(todo.title);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => onDelete(todo._id)}>Delete</button>
              </td>
              
              <td>
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo._id)}
                />
              </td>
            </tr> 
          );
        })}
      </tbody>
    </table>
  );
}

export default TodoList;
