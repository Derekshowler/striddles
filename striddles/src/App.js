import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
    </BrowserRouter>
    
  );
}

export default App;