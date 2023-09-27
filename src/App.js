import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <h1>Задачник на React</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;

