import styled from 'styled-components';

const StyledGrid = styled.div`
  padding: 0px;
  h1 {
    font-family: 'Caveat', cursive;
    color: #DADBBD;
    padding: 15px;
    font-size: 35px;
    
    

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

const StyledGridContent = styled.div`
  background: #D82148;
  border-radius: 20px;
  display: flex;
  overflow-x: auto;
  position: relative;
  background: rgb(0, 0, 0, 0.7);
  
  

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }

  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px; 
    background: #DADBBD;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

`;

export {StyledGrid, StyledGridContent};