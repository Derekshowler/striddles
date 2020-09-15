import React from 'react';
import styled from 'styled-components';

const StyledLogin = styled.div`
  background: black;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;

  .h1 {
    color: white;
  }
`;

function Login() {
  return (
    <StyledLogin>
      <h1>Login Page</h1>
    </StyledLogin>
  );
}

export default Login;