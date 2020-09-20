import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './components/styles/GlobalStyles';
import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import NotFound from './components/pages/NotFound';
import CardPageData from './components/pages/CardPageData';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Route exact path="/" component={Home} />
      <CardPageData path="/:cardPageDataID" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <NotFound default />
      <GlobalStyle></GlobalStyle>
    </BrowserRouter>
  </>
)


export default App;