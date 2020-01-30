import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';


const TodoList = () => (
    <ul className="list-group">
        <li className="list-group-item list-group-item-action list-group-item-secondary">Learn React</li>
        <li className="list-group-item list-group-item-action list-group-item-success">Build Awesome App</li>
    </ul>
);

const AppHeader = () => (
    <h1>My Todo List</h1>
);

const SearchPanel = () => (
    <input type="search" placeholder="search" />
);

const App = () => (
    <div className="container">
        <AppHeader />
        <SearchPanel />        
        <TodoList />
    </div>
);


ReactDOM.render(<App />, document.querySelector("#root"));