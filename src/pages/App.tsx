import '../App.css'
import '../assets/styles/global.css'

import {Routes, Route } from 'react-router-dom'

import Header from "../components/Header"
import Inicio from "./Home"
import Favoritos from "./Favorites"
import About from "./About"
import Search from './Search'
import Footer from '../components/Footer'
import MovieDetails from './MovieDetails'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Discover from './Discover'

function App() {

  //App.tsx is responsible for the routing system of the page.
  //We use Route for show the respective content 

  return (
    <>
      <div className='app-container'>
        <Header></Header>
        <div>
          <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/home' element={<Inicio />}/>
            <Route path='/discover' element={<Discover />}/>
            <Route path='/favorites' element={<Favoritos />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/movie/:id?' element={<MovieDetails />}/>
            <Route path='/search/:search?' element={<Search />}/>
          </Routes>
        </div>
        
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
