import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home'
import base from "./components/HOC/Base";

function App() {

  return (
    <Router>
      <Route path='/login' component={base(Login)} />
      <Route path='/' component={base(Home)} />
    </Router>
  );
}

export default App;
