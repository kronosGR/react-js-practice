import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import reducer from "./reducers";
import Hello from "./Hello";
import { store } from "./store";
import ButtonGroup from "./ButtonGroup";

function App() {
  return (
    <div>
      <Hello key={1} tect={store.getState().tech} />
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    </div>
  );
}

export default App;
