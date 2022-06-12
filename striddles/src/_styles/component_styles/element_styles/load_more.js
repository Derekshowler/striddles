import styled from 'styled-components';

const StyledLoadMoreBtn = styled.button`
text-decoration: none;
font-size: 2em;
float: right;
padding: 20px;
text-align: center;
z-index: 1;
background-color: #D82148;

@media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
}

:hover {
  opacity: 0.8;
  box-shadow: 0 4px 2rem -4px #D82148;
  transform: translateY(-3px);
}
`;

export default StyledLoadMoreBtn;