import logo from "./logo.svg";
import "./App.css";
import { createContext, useContext, useReducer } from "react";
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
      return {
        ...state,
        [action.name]: state[action.name] - 1,
      };
    default:
      return state;
  }
};

const useValue = () => {
  return useReducer(reducer, initialState);
};

const Context = createContext(null);

const useGlobalState = () => {
  const value = useContext(Context);
  if (value === null) throw new Error("Please add GlobalSTateProvider");
  return value;
};

const GlobalStateProvider = ({ children }) => (
  <Context.Provider value={useValue()}>{children}</Context.Provider>
);

const Counter = ({ name }) => {
  const [state, dispatch] = useGlobalState();
  return (
    <div>
      {state[name]}
      <button onClick={() => dispatch({ type: "INCREMENT" }, name)}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" }, name)}>-1</button>
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
