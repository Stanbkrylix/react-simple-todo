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
    console.log(value);
  }

  function onDelete(id) {
    console.log(id);
    setValue((prev) => prev.filter((item) => item.id !== id));
    // console.log()
  }
  function onEdit(id) {}
  function onToggle(id) {
    console.log(id);
    setValue((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isTrue: !item.isTrue } : item
      )
    );
  }

  const filterArray = value.filter((item) => !item.isTrue);
  return (
    <div className="app-container">
      <Form text={text} setText={setText} addName={addName} />
      <TaskList
        valueArray={value}
        onDelete={onDelete}
        onEdit={onEdit}
        onToggle={onToggle}
        filterArray={filterArray}
      />
    </div>
  );
}

export default App;
