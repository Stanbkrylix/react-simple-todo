export default function TaskList({
  valueArray,
  onDelete,
  onEdit,
  onToggle,
  filterArray,
  editingId,
  draftText,
  setDraftText,
  setEditingId,
  onConfirm,
}) {
  return (
    <div className="task-list-container">
      <h2>List</h2>
      <p className="task-amount">
        {filterArray.length} {filterArray.length <= 1 ? "task" : "tasks"}{" "}
        remaining
      </p>
      <ul className="lists">
        {valueArray.map((item) => {
          return item.id === editingId ? (
            // editing mode
            <div key={item.id}>
              <li key={item.id} className="list">
                <input
                  value={draftText}
                  type="text"
                  className="edit-input"
                  placeholder="Edit"
                  onChange={(e) => setDraftText(e.target.value)}
                />
                <button
                  className="confirm-btn"
                  onClick={() => onConfirm(item.id)}
                >
                  Confirm
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </li>
            </div>
          ) : (
            <div key={item.id}>
              <li className="list" key={item.id}>
                <span
                  className={
                    item.isTrue ? "list-text completed" : "list-text  "
                  }
                >
                  {item.text}
                </span>

                <input
                  className="input-checkbox"
                  type="checkbox"
                  checked={item.isTrue}
                  onChange={() => onToggle(item.id)}
                />
                <button
                  className="delete-btn"
                  disabled={item.isTrue}
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
                <button
                  className="edit-btn"
                  disabled={item.isTrue}
                  onClick={() => onEdit(item.id)}
                >
                  Edit
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
