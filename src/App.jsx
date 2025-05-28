import { use, useState } from "react";
import "./App.css";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  // const [count, setCount] = useState(0);
  const [value, setValue] = useState([]);
  const [text, setText] = useState("");

  const [draftText, setDraftText] = useState("");
  const [editingId, setEditingId] = useState(null);

  function addName() {
    if (!text.trim()) return;

    setValue((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: text, isTrue: false },
    ]);

    setText("");
    setEditingId(null);
    console.log(value);
  }

  function onDelete(id) {
    console.log(id);
    setValue((prev) => prev.filter((item) => item.id !== id));
    // console.log()
  }

  function onToggle(id) {
    console.log(id);
    setValue((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isTrue: !item.isTrue } : item
      )
    );
  }

  function onEdit(id) {
    setEditingId(id);
    const itemToEdit = value.find((item) => item.id === id);
    setDraftText(itemToEdit.text);
  }

  function onConfirm(id) {}
  function onCancel() {
    setDraftText("");
    setEditingId(null);
  }

  const filterArray = value.filter((item) => !item.isTrue);
  return (
    <div className="app-container">
      <Form text={text} setText={setText} addName={addName} />
      <TaskList
        valueArray={value}
        filterArray={filterArray}
        editingId={editingId}
        draftText={draftText}
        setDraftText={setDraftText}
        onDelete={onDelete}
        onEdit={onEdit}
        onToggle={onToggle}
        setEditingId={setEditingId}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  );
}

export default App;
