import React from "react";
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from './components/Login'
import Homepage from "./components/Homepage";

function App() {
  const [user] = useAuthState(auth)

  return (
    user ? <Homepage /> : <Login />
  );
}

export default App;
