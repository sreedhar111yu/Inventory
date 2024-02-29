import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'


function App() {
  return (
   <>
   <BrowserRouter>
     <Sidebar/>
     

     <Routes>
      <Route path='/' element={<Home/>}></Route>
     </Routes>
   </BrowserRouter>
   </>
  )
}

export default App