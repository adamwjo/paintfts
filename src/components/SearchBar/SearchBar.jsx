import React from 'react'
import './searchBar.css'

const SearchBar = () => {
    return (
        <div className="input-group mt-4 search-bar">
            <span className="input-group-text">🔍</span>
            <input type="text" className="form-control" aria-label="search painting by name"/>
        </div>
    )
}

export default SearchBar
