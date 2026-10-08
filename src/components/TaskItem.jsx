export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(task.id)} className="task-text">
        {task.text}
      </span>
      <div className="task-actions">
        <button onClick={() => onToggle(task.id)} className="btn-toggle">
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)} className="btn-delete">
          Delete
        </button>
      </div>
    </li>
  );
}