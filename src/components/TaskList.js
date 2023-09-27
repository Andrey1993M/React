import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, editTask } from '../redux/reducers/tasksSlice';


function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  
  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  const startEditing = (task) => {
    setEditing(true);
    setCurrentTask(task);
  };

  const finishEditing = (title) => {
    dispatch(editTask({ ...currentTask, title }));
    setEditing(false);
    setCurrentTask({});
  };

  const cancelEditing = () => {
    setEditing(false);
    setCurrentTask({});
  };

  const toggleCompletion = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      <h2>Список задач</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editing && task.id === currentTask.id ? (
              <div>
                <input 
                  type="text" 
                  value={currentTask.title}
                  onChange={(e) => setCurrentTask({ ...currentTask, title: e.target.value })}
                />
                <button onClick={() => finishEditing(currentTask.title)}>Сохранить</button>
                <button onClick={cancelEditing}>Отменить</button>
                <button onClick={() => toggleCompletion(task.id)}>
                  {task.completed ? 'Вернуть' : 'Завершить'}
                </button>
              </div>
            ) : (
              <>
                {task.title}
                <button onClick={() => startEditing(task)}>Редактировать</button>
                <button onClick={() => handleRemove(task.id)}>Удалить</button>
                <button onClick={() => toggleCompletion(task.id)}>
                  {task.completed ? 'Вернуть' : 'Завершить'}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

