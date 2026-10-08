import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';

export default function App() {
  // Lazy initial state for localStorage persistence
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('quicktask_react_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('all');

  // Sync with localStorage on tasks change
  useEffect(() => {
    localStorage.setItem('quicktask_react_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now().toString(), // Stable unique ID
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <header>
        <h1>QuickTask React</h1>
        <p>Manage your tasks efficiently with React & Vite</p>
      </header>

      <TaskForm onAddTask={addTask} />
      <FilterBar currentFilter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}