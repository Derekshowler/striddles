import React from "react";
import styled from "styled-components";

import MovieTitle from "./MovieTitle";
import Card from "./MovieCard";
import testData from "../../testData.json";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const CardList = () => {
  return (
    <>
      <MovieTitle main>Trending Movies</MovieTitle>
      <Wrapper>
        {testData.movies.map(movies => (
          <Card title={movies.title} description={movies.description} rating={movies.rating}/>
        ))}
      </Wrapper>
            
    </>
  );
};

export default CardList;
