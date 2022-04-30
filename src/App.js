import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../src/Layout/Nav"
import Home from "../src/Components/home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "../src/Components/Contact/Contact";


function App() {


  return (
    <>
      <Router> 
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}


export default App;