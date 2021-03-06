import { useDispatch, useTrackedState } from "./store";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";

const ToDoList = () => {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const setQuery = (event) => {
    dispath({ type: "SET_QUERY", query: event.target.value });
  };

  return (
    <div>
      <ul>
        {state.todos.map(({ id, title, completed }) => (
          <TodoItem key={id} id={id} title={title} completed={completed} />
        ))}
        <NewTodo />
      </ul>
      <div>
        Highlight Query for incomplete items:
        <input vale={state.query} onChange={setQuery} />
      </div>
    </div>
  );
};

export default ToDoList;
