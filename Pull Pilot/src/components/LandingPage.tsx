
import React from 'react'




const LandingPage = () => {

  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/github'

  }
  
  return (
  <>
    <h1>login with github</h1>
    <button onClick={handleLogin}>login</button>
  </>);
}


export default LandingPage;
