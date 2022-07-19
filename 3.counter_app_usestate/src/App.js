import logo from "./logo.svg";
import "./App.css";
import { createContext, useContext, useState } from "react";

const initialState = {
  count1: 0,
  count2: 0,
};

const useValue = () => useState(initialState);
const Context = createContext(null);

const useGlobalState = () => {
  const value = useContext(Context);
  if (value === null) throw new Error("Please add GlobalStateProvider");
  return value;
};

const GlobalStateProvider = ({ children }) => (
  <Context.Provider value={useValue()}>{children}</Context.Provider>
);

const Counter = ({ name }) => {
  const [state, setState] = useGlobalState();
  const count = state[name] || 0;
  const increment = () => {
    setState({ ...state, [name]: count + 1 });
  };
  const decrement = () => {
    setState({ ...state, [name]: count - 1 });
  };

  return (
    <div>
      {count}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

function App() {
  return (
    <GlobalStateProvider>
      <h1>Count1</h1>
      <Counter name="count1" />
      <Counter name="count1" />

      <h1>Count2</h1>
      <Counter name="count2" />
      <Counter name="count2" />
    </GlobalStateProvider>
  );
}

export default App;
