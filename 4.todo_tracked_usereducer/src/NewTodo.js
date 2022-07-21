import { useDispatch } from "./store";
import { useState } from "react";
import { useFlasher } from "./utils";

const NewTodo = () => {
  const dispath = useDispatch();
  const [text, setText] = useState("");

  const addTodo = () => {
    dispath({ type: "ADD_TODO", title: text });
    setText("");
  };

  return (
    <li ref={useFlasher()}>
      <input
        value={text}
        placeholder="Enter title..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </li>
  );
};

export default React.memo(NewTodo);
