import styles from './modules/MovieCard.module.css'
import { useNavigate } from "react-router-dom";
import { Movie } from '../types/Movie'

interface Props {
    movie: Movie
}

function MovieCard ({movie}:Props)  {

    let navigate = useNavigate()

    const navigating = (id: string) => {
        navigate(`/movie/${id}`);
        console.log(typeof(id) + ":" +id)
    }

    return(
        <article className={styles.movieCard} onClick={() => navigating(movie.id.toString())}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <header className={styles.movieData}>
                <h3>{movie.title}</h3>
                <h4>{movie.vote_average.toFixed(1)}</h4>
            </header>
        </article>      
    );
}

export default MovieCard