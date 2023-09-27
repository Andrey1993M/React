import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/reducers/tasksSlice';

function AddTask() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addTask({ id: Date.now(), title }));
      setTitle('');
    }
  };

  return (
    <div>
      <h2>Добавить задачу</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название задачи"
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddTask;
