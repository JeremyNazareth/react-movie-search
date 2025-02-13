import Slider from "../components/Slider"
import moviesData from "../assets/data/topRated.json"
import '../assets/styles/global.css'
import genresData from "../assets/data/genres.json"
import ShowGenres from "../components/ShowGenres"

function Contacto(){
    return (        
        <div className="app-body">
            <Slider movies={moviesData}></Slider>
            <ShowGenres genres={genresData}></ShowGenres>
        </div>
        

    )
}

export default Contacto;