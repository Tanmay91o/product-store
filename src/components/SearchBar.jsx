import React from 'react';

const SearchBar = ({ search, setSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: 8, width: '100%', marginBottom: 20 }}
        />
    );
};

export default SearchBar;
