import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Components/Home";


function App() {
 
  const[ login, setLogin ] =useState("true");

  const updateLogin = (newState) => {
    setLogin(newState);
  } 

  return (
    <div className= " w-screen h-screen bg-gray-200 flex justify-center items-center">
      {login ? <Login updateLogin = {updateLogin}/> : <Signup updateLogin = {updateLogin}/>}
    </div>
    // <Home/>
  )
}

export default App
