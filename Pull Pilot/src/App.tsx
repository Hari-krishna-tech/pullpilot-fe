import React from 'react'
import {Routes, Route } from "react-router"
import './App.css'
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

function App() {
  

  return (
    <>
      <div>
        <Routes>
            
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>

        </Routes>
      </div>
    </>
  )
}

export default App
