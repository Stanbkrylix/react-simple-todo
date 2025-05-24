export default function TaskList({ valueArray, onDelete, onEdit, onToggle }) {
  return (
    <div className="task-list-container">
      <ul className="lists">
        {valueArray.map((item) => {
          return (
            <>
              <li key={item.id}>{item.text}</li>
              <input
                type="checkbox"
                checked={item.isTrue}
                onChange={onToggle}
              />
              <button disabled={item.isTrue} onClick={() => onDelete(item.id)}>
                Delete
              </button>
              <button disabled={item.isTrue} onClick={() => onEdit(item.id)}>
                Edit
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
}
