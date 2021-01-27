import React, { createContext, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home'
import { AuthProvider } from "./AuthProvider";

function App() {

//  const [user] = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        {// <Route path='/login' component={base(Login)} />
          //<Route path='/' component={base(Home)} />
        }
        <Login />
      </Router>
    </AuthProvider>
  );
}

export default App;
