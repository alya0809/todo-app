import React from 'react';
import '../styles/TaskItem.css';

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Дата завершения: {task.dueDate}</p>
      </div>
      <div className="task-item-controls">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Отметить незавершенной' : 'Отметить завершенной'}
        </button>
        <button onClick={() => editTask(task)}>Редактировать</button>
        <button onClick={() => deleteTask(task.id)}>Удалить</button>
      </div>
    </li>
  );
};

export default TaskItem;
