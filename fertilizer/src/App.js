import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to import these
import Home from './Home'; 


function App() {
  return (
    <Router>
    
        <div>
          <Routes>

            
            <Route path="/Home" element={<Home />} />
           
          </Routes>
        </div>

    </Router>
  );
}

export default App;