// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './Pages/About';
import './App.css';
import Chat from './components/Chat/Chat';
import { Results } from './components/Results/Results';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/about" element={<Results/>}></Route>
            <Route path="/services">Services Page</Route>
            <Route path="/contact">Contact Page</Route>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
