import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { loadTasks, saveTasks } from './utils/localStorage';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState(loadTasks());
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} clearTaskToEdit={() => setTaskToEdit(null)} />
      <TaskList tasks={tasks} editTask={setTaskToEdit} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
