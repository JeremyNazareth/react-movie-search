import '../App.css'
import '../assets/styles/global.css'
import Header from "../components/Header"
import {Routes, Route } from 'react-router-dom'
import Inicio from "./Home"
import Descubrir from './Discover'
import Favoritos from "./Favorites"
import Contacto from "./Contact"
import MovieDetails from './MovieDetails'
import Search from './Search'

function App() {

  return (
    <>
      <div>        
          <Header></Header>
          <div className="app-body">
            <Routes>
            <Route path='/' element={<Inicio />}/>
              <Route path='/home' element={<Inicio />}/>
              <Route path='/discover' element={<Descubrir />}/>
              <Route path='/favorites' element={<Favoritos />}/>
              <Route path='/contact' element={<Contacto />}/>
              <Route path='/movie/:id?' element={<MovieDetails />}/>
              <Route path='/search/:search?' element={<Search />}/>
            </Routes>  
          </div>    
      </div>
    </>
  )
}

export default App
