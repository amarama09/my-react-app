import React from 'react';
const SearchBox = ({handleSearch}) => {
    return ( <div className="input-group mb-3">
    <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e=>handleSearch(e.currentTarget.value)}

      />
    </div> );
}
 
export default SearchBox;