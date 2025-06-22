import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo Siyahısı</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Yeni tapşırıq daxil et"
      />
      <button onClick={addTodo} style={{ marginLeft: '10px' }}>
        Əlavə et
      </button>

      <ul style={{ marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => deleteTodo(index)} style={{ marginLeft: '10px' }}>
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
