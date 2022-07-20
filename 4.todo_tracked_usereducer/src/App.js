import logo from "./logo.svg";
import "./App.css";

const initialState = {
  todos: [
    { id: 1, title: "Wash dishes" },
    { id: 2, title: "Study JS" },
    { id: 3, title: "Buy ticket" },
  ],
  query: "",
};

let nextId = 4;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: nextId++, title: action.title }],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

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
