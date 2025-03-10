import { useParams } from 'react-router-dom'
import movieDetails from '../assets/data/movieDetails.json'

const MovieDetails = () => {

    const {id} = useParams();
    const movie = movieDetails.find((movieData) => movieData.id.toString() === id)

    
    return(
        <div>
            <h1>Movie Details</h1>
            <h2>{movie?.original_title}</h2>
        </div>
        
    )
}

export default MovieDetails