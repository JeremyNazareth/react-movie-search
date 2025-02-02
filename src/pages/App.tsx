import { useState } from 'react'
import Header from "../components/Header"
import '../App.css'
import '../assets/styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Inicio from "./Inicio"
import  Tendencias from "./Tendencias"
import  Favoritos from "./Favoritos"
import  Contacto from "./Contacto"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Header></Header>
          <div className="app-body">
            <div className='app-content'>
              <Routes>
                <Route path='/inicio' element={<Inicio />}/>
                <Route path='/tendencias' element={<Tendencias />}/>
                <Route path='/favoritos' element={<Favoritos />}/>
                <Route path='/contacto' element={<Contacto />}/>
              </Routes>  
            </div>
            
          </div>
          
        </Router>
    
      </div>
    </>
  )
}

export default App
