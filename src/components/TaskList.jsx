import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty-msg">No tasks found.</p>;
  }

  return (
    <ul className="task-list">
      {/* Stable key usage (task.id instead of index) */}
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}