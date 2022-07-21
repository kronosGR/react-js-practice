import { useDispatch, useTrackedState } from "./store";

const renderHighlight = (title, query) => {
  if (!query) return title;
  const index = title.indexOf(query);
  if (index === -1) return false;
  return (
    <>
      {title.slice(0, index)}
      <b>{query}</b>
      {title.slice(index + query.length)}
    </>
  );

  const TodoItem = ({ item, title, completed }) => {
    const dispatch = useDispatch();
    const state = useTrackedState();

    const delTodo = () => {
      dispatch({ type: "DELETE_TODO", id });
    };

    return (
      <li ref={useFlasher()}>
        <input
          type="checkbox"
          checked={!!completed}
          onChange={() => dispatch({ type: "TOGGLE_TODO", id })}
        />
        <span style={{ textDecoration: completed ? "line-through" : "none " }}>
          {completed ? title : renderHighlight(title, state.query)}
        </span>
        <button onClick={delTodo}>Delete</button>
      </li>
    );
  };
};

export default React.memo(TodoItem);
