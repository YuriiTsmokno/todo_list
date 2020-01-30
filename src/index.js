import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';


const TodoList = () => {
    const items = ['Drink Coffee', 'Build Awesome App'];
    return (
        <ul className="list-group">
            <li className="list-group-item list-group-item-action list-group-item-secondary">{items[0]}</li>
            <li className="list-group-item list-group-item-action list-group-item-success">{items[1]}</li>
        </ul>
    )
};

const AppHeader = () => (
    <h1>My Todo List</h1>
);

const SearchPanel = () => {
    const searchText = "Type here to search";
    return (
        <input type="search" placeholder={searchText} />
    )
};

const App = () => {
    return (
        <div className="container">
            <AppHeader />
            <SearchPanel />        
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));