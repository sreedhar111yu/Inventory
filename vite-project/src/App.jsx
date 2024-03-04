// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Items from './pages/Items';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path='/' element={<Home />} />
           
           <Route path='/items' element={<Items/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
