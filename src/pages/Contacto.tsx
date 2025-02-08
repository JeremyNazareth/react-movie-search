import Slider from "../components/Slider"
import moviesData from "../assets/data/topRated.json"
import '../assets/styles/global.css'

function Contacto(){
    return (        
        <div className="app-body">
            <Slider movies={moviesData}></Slider>
        </div>

    )
}

export default Contacto;