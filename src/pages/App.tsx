import '../App.css'
import '../assets/styles/global.css'
import Header from "../components/Header"
import {Routes, Route } from 'react-router-dom'
import Inicio from "./Home"
import Descubrir from './Discover'
import Favoritos from "./Favorites"
import About from "./About"
import MovieDetails from './MovieDetails'
import Search from './Search'
import Footer from '../components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/home' element={<Inicio />}/>
        <Route path='/discover' element={<Descubrir />}/>
        <Route path='/favorites' element={<Favoritos />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/movie/:id?' element={<MovieDetails />}/>
        <Route path='/search/:search?' element={<Search />}/>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
