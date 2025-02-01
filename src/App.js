import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Project from './components/Project';
import MyCertifications from './components/MyCertifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/Mycertifications" element={<MyCertifications/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
