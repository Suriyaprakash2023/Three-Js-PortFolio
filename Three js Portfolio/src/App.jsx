import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import  Contact  from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <main>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
