import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const welcome={
  greeting:'Hey',
  title:'React'
}
function App() {
  
  return (
   <div>
    <h1>Hello {welcome.greeting} {welcome.title}</h1>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text'/>

    <hr/>
    {list.map(item => {
      return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        </div>)
    })}
   </div>
  );
}

export default App;
