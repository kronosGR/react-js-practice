import "./App.css";
import { useEffect, useReducer, useRef, useState } from "react";

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

function App() {
  const initialStories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const getAsyncStories = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
    );

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");
  // const [stories, setStories] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const storiesReducer = (state, action) => {
    switch (action.type) {
      case "STORIES_FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          error: false,
        };
      case "STORIES_FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "STORIES_FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case "REMOVE_STORY":
        return {
          ...state,
          data: state.data.filter(
            (story) => action.payload.objectID !== story.objectID
          ),
        };
      default:
        throw new Error();
    }
  };

  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    dispatchStories({ tyoe: "STORIES_FETCH_INIT" });

    getAsyncStories()
      .then((result) => {
        dispatchStories({ type: "SET_STORIES", payload: result.data.stories });
      })
      .catch(() => dispatchStories({ type: "STORIES_FETCH_FAILURE" }));
  }, []);

  const handleRemoveStory = (item) => {
    // const newStories = stories.filter(
    //   (story) => story.objectID !== story.objectID
    // );
    dispatchStories({ type: "REMOVE_ITEM", payload: item });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.data.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />

      {stories.isError && <p>Something went wrong...</p>}

      {stories.isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
}

const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = useRef();
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        autoFocus={isFocused}
      />
    </>
  );
};

const List = ({ list, onRemoveItem }) => {
  return list.map(function (item) {
    return <Item key={item.objectID} item={onRemoveItem} />;
  });
};

const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () => {
    onRemoveItem(item);

    return (
      <div>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <button type="button" onClick={handleRemoveItem}>
            Dismiss
          </button>
        </span>
      </div>
    );
  };
};

export default App;
