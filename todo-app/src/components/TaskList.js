import React, { useState } from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ tasks, editTask, deleteTask, toggleComplete }) => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('dueDate');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="task-list">
      <div className="task-list-controls">
        <label>Фильтр:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Все</option>
          <option value="completed">Завершенные</option>
          <option value="incomplete">Незавершенные</option>
        </select>
        <label>Сортировать по:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="dueDate">Дата завершения</option>
          <option value="title">Заголовок</option>
        </select>
      </div>
      <ul>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
