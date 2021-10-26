import React from "react";
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from './components/Login'
import Home from "./components/Home";

function App() {
  const [user] = useAuthState(auth)

  return (
    user ? <Home /> : <Login />
  );
}

export default App;
