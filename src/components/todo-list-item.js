import React, { PureComponent } from 'react';
import '../styles/index.css';

class TodoListItem extends PureComponent {

    render() {
        const { done, important, label, onDeleted, onToggleImportant, onToggleDone } = this.props;
        
        let classNames = "todo-list-item";
        if(done) {
            classNames += " done";
        }
        if(important) {
            classNames += " important";
        }
    
        return (
            <span className={classNames}>
                <span 
                    className="todo-list-item-label" 
                    onClick={onToggleDone} >
                    {label}
                </span>
                <div className="todo-list-block-buttons">
                    <button type="button" onClick={onDeleted} className="btn btn-outline-danger btn-sm float-right">
                        <i className="fas fa-trash"></i>
                    </button>
                    <button type="button" onClick={onToggleImportant} className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-exclamation"></i>
                    </button>
                </div>
            </span>
        );
    }
}

export default TodoListItem;