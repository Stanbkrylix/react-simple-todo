export default function TaskList({ valueArray, onDelete, onEdit, onToggle }) {
  return (
    <div className="task-list-container">
      <ul className="lists">
        {valueArray.map((item) => {
          return (
            <div key={item.id}>
              <li key={item.id}>{item.text}</li>
              <input
                type="checkbox"
                checked={item.isTrue}
                onChange={() => onToggle(item.id)}
              />
              <button disabled={item.isTrue} onClick={() => onDelete(item.id)}>
                Delete
              </button>
              <button disabled={item.isTrue} onClick={() => onEdit(item.id)}>
                Edit
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
