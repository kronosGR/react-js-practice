import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import reducer from "./reducers";
import Hello from "./Hello";

const initialState = { tech: "React" };

const store = createStore(reducer, initialState);

function App() {
  return (
    <div>
      <Hello tect={store.getState()} />
    </div>
  );
}

export default App;
