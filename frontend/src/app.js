import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormBuilder from './pages/FormBuilder';
import FormPreview from './pages/FormPreview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormBuilder />} />
        <Route path="/form/:id" element={<FormPreview />} />
      </Routes>
    </Router>
  );
}

export default App;
