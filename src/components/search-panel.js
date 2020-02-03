import React, { PureComponent } from 'react';
import '../styles/index.css';

export default class SearchPanel extends PureComponent {
    
    state = {
        term: ''
    };

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }
    
    render() {
        return(
            <input type="text" 
                className="form-control search-input" 
                placeholder="Type to search"
                value={this.state.term}
                onChange={this.onSearchChange} />
        );
    };
};