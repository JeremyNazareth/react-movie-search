import styles from './modules/components/MovieCard.module.css'
import { useNavigate } from "react-router-dom";
import { Movie } from '../types/Movie'
import { Heart } from 'lucide-react'
import Rating from "../components/Rating"
interface Props {
    movie: Movie
}

function MovieCard ({movie}:Props)  {

    let navigate = useNavigate()

    const navigating = (id: string) => {
        navigate(`/movie/${id}`);
        console.log(typeof(id) + ":" +id)
    }

    const date = new Date(movie.release_date);
    const dateOptions = { month: "long"};
    
    const movieDate = `${ new Intl.DateTimeFormat("en-US", dateOptions).format(date)} ${date.getDay().toString()}, ${date.getFullYear().toString()}`

    return(
        <article className={styles.movieCard} onClick={() => navigating(movie.id.toString())}>
            <div className={styles.cover}>
                
                <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            </div>
            
            <header className={styles.movieData}>
                <h3>{movie.title}</h3>
                <h4>{movieDate}</h4>
                <div className={styles.Rating}>
                    {<Rating rating={movie.vote_average.toFixed(1)}/>}
                    
                </div>
            </header>
        </article>      
    )                    

}

export default MovieCard