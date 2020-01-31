import React from 'react';
import '../styles/index.css';

const SearchPanel = () => {
    const searchText = "Type to search";
    return (
        <input type="text" className="form-control search-input" placeholder={searchText} />
    );
};

export default SearchPanel;