import { useParams } from 'react-router-dom'
import movieDetails from '../assets/data/movieDetails.json'

const MovieDetails = () => {

    const {id} = useParams();
    
    return(
        <div>
            <h1>Movie Details</h1>
            <h2>{id? id : "Pelicula no encontrada"}</h2>
        </div>
        
    )
}

export default MovieDetails