import "./App.css";

import TodoList from "./TodoList";

function App() {
  return (
    <div className="app-wrapper">
      <div className="todo-list-app">
        <TodoList />
      </div>
      <footer className="App-footer">
        <a
          href="https://github.com/liviaalcantaraf/todo-list-react-app"
          className="open-code"
        >
          {" "}
          Open-source code
        </a>{" "}
        by Lívia A.
      </footer>
    </div>
  );
}

export default App;
