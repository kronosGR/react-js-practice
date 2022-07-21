import { Provider } from "./store";

import "./App.css";
import ToDoList from "./ToDoList";

function App() {
  return (
    <Provider>
      <ToDoList />
    </Provider>
  );
}

export default App;
