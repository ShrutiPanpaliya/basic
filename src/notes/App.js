import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import Notes from '../pages/Notes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Notes />} />
        
      </Routes>
    </Router>
  );
}

export default App;