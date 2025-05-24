export default function Form({ text, setText, addName }) {
  return (
    <div className="form-container">
      <input
        className="tasks-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-btn" onClick={addName}>
        Add Task
      </button>
    </div>
  );
}
