import React, { useState, useEffect } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ addTask, editTask, taskToEdit, clearTaskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert('Заголовок и дата завершения обязательные поля');
      return;
    }
    const task = { title, description, dueDate };
    if (taskToEdit) {
      editTask(task);
    } else {
      addTask(task);
    }
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    clearTaskToEdit();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{taskToEdit ? 'Редактировать задачу' : 'Добавить задачу'}</h2>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">{taskToEdit ? 'Обновить задачу' : 'Добавить задачу'}</button>
      {taskToEdit && <button type="button" onClick={clearForm}>Отмена</button>}
    </form>
  );
};

export default TaskForm;
