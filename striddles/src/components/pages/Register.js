import React from 'react';
import styled from 'styled-components';

const StyledRegister = styled.div`
  background: black;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;

  .h1 {
    color: white;
  }
`;

function Register() {
  return (
    <StyledRegister>
      <h1>Register Page</h1>
    </StyledRegister>
  );
}

export default Register;