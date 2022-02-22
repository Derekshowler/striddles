import React from "react";
//import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import { Router } from "@reach/router";

import GlobalStyle from "./components/styles/GlobalStyles";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

import NotFound from "./components/pages/NotFound";
import ContentPage from "./components/pages/ContentPage";

const App = () => (
  <>
    <Navbar></Navbar>
    <Router>
      <Home path="/"></Home>
      <ContentPage path="/:fetchDetails"/>
      <NotFound default></NotFound>
      <Login path="/login"></Login>
      <Register path="/register"></Register>
    </Router>
    <GlobalStyle></GlobalStyle>
  </>
);

export default App;
