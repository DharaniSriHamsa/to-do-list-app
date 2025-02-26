import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !date) return;
    onAdd(text, date);
    setText("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" className="add-button">➕ Add</button>
    </form>
  );
};

export default AddTodo;
