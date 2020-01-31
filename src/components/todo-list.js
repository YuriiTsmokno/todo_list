import React from 'react';
import TodoListItem from './todo-list-item';
import '../styles/index.css';

const TodoList = ({todos}) => {

    const elements = todos.map((element) => {
        const {id, ...elemProps} = element;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...elemProps} />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;