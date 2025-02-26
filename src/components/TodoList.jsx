import React, { useState } from "react";

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const groupedTodos = todos.reduce((groups, todo) => {
    const { date } = todo;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(todo);
    return groups;
  }, {});

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    onEdit(id, editText);
    setEditingId(null);
  };

  return (
    <div className="todo-list">
      {Object.keys(groupedTodos).map((date) => (
        <div key={date} className="task-group">
          <h3 className="task-date">📅 {date}</h3>
          <ul>
            {groupedTodos[date].map((todo) => (
              <li key={todo.id} className={todo.completed ? "completed" : ""}>
                {editingId === todo.id ? (
                  <>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => saveEdit(todo.id)} className="save-button">💾 Save</button>
                  </>
                ) : (
                  <>
                    <span>{todo.text}</span>
                    <div className="buttons">
                      <button onClick={() => onToggle(todo.id)} className="complete-button">✅ Complete</button>
                      <button onClick={() => handleEdit(todo.id, todo.text)} className="edit-button">✏️ Edit</button>
                      <button onClick={() => onDelete(todo.id)} className="delete-button">❌ Delete</button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
