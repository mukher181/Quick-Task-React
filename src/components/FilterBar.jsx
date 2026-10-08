export default function FilterBar({ currentFilter, setFilter }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button
          key={f}
          className={currentFilter === f ? 'active' : ''}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}