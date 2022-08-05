import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import reducer from "./reducers";
import Hello from "./Hello";
import { store } from "./store";

function App() {
  return (
    <div>
      <Hello tect={store.getState().tech} />
    </div>
  );
}

export default App;
