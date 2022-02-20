import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  width: 100%;
  color: #fff;
`;

const StyledSearchBarContent = styled.div`
  max-width: 500px;
  width: 100%;
  height: 55px;
  border: 4px solid #056676;
  background: #eeeeee;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: #fff;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: #eeeeee;
    z-index: 1000;
  }

  input {
    font-family: 'Caveat', cursive;
    text-align: center;
    font-size: 38px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 30px;
    color: #056676;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;

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