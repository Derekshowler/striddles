import styled from 'styled-components';

const StyledSearchBar = styled.div`
  width: 100%;
  color: #fff;
`;

const StyledSearchBarContent = styled.div`
  max-width: 500px;
  width: 100%;
  height: 55px;
  border: 4px solid #151D3B;
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

export {StyledSearchBar, StyledSearchBarContent};