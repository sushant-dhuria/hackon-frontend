// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
       
            <Route path="/" element={<ParentComponent/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
