import logo from "./logo.svg";
import "./App.css";
import {useReducer} from "react";
const initialState = {
  count1: 0,
  count2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        [action.name]: state[action.name] + 1,
      };
    case "DECREMENT":
      return{
        ...state,
        [action.name]:state[action.name]-1;
      }
    default: return state;
  }
};

const useValue=()=> useReducer(reducer, initialState);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
