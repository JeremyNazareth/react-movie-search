import '../App.css'
import '../assets/styles/global.css'
import Header from "../components/Header"
import {Routes, Route } from 'react-router-dom'
import Inicio from "./Inicio"
import Descubrir from './Descubrir'
import Favoritos from "./Favoritos"
import Contacto from "./Contacto"
import MovieDetails from './MovieDetails'

function App() {

  return (
    <>
      <div>        
          <Header></Header>
          <div className="app-body">
            <Routes>
              <Route path='/inicio' element={<Inicio />}/>
              <Route path='/Descubrir' element={<Descubrir />}/>
              <Route path='/favoritos' element={<Favoritos />}/>
              <Route path='/contacto' element={<Contacto />}/>
              <Route path='/movie/:id' element={<MovieDetails />}/>
            </Routes>  
          </div>    
      </div>
    </>
  )
}

export default App
