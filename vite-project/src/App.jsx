import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import  Navbar  from './components/Navbar'

function App() {
  return (
   <>
   <BrowserRouter>
     <Sidebar/>
     <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>}></Route>
     </Routes>
   </BrowserRouter>
   </>
  )
}

export default App