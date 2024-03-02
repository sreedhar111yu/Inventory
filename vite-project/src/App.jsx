// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
