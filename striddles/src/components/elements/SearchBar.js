import React, { useState, useRef } from 'react';
import { StyledSearchBar, StyledSearchBarContent } from '../../_styles/component_styles/utility_styles/search';

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('');
  const timeOut = useRef(null);

  const doSearch = event => {
    const { value } = event.target;
    
    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  }

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <input
          type="text"
          placeholder="Search for anything!"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  )
}

export default SearchBar;