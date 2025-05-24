import { use, useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  // const [count, setCount] = useState(0);
  const [value, setValue] = useState([]);
  const [text, setText] = useState("");

  function addName() {
    if (!text.trim()) return;

    setValue((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: text, isTrue: false },
    ]);

    setText("");
    console.log(value);
  }

  return (
    <>
      <Form text={text} setText={setText} addName={addName} />
      <TaskList valueArray={value} />
    </>
  );
}

export default App;
