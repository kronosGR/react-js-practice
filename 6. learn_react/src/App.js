import "./App.css";
import { useState } from "react";

function App() {
  const stories = [
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
  const [searchItem, setSearchItem] = useState("");
  const handlerChange = (event) => {
    setSearchItem(event.target.value);
  };
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handlerChange} />
      <p>
        Searching for <strong>{searchItem}</strong>
      </p>
      <hr />

      <List list={stories} />
    </div>
  );
}

const List = (props) => {
  return props.list.map(function (item) {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
  });
};
export default App;