import React, { PureComponent } from 'react';
import '../styles/index.css';

class ItemStatusFilter extends PureComponent {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];
    
    render() {
        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const className = isActive ? ' btn-info' : ' btn-outline-secondary';
            return(
                <button type="button" key={name} className={`btn ${className}`} onClick={() => onFilterChange(name)}>{label}</button>
            );
        });

        return(
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default ItemStatusFilter;