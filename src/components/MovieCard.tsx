import styles from './modules/components/MovieCard.module.css'
import { useNavigate } from "react-router-dom";
import { Movie } from '../types/Movie'
import Rating from './Rating'
interface Props {
    movie: Movie
}

function MovieCard ({movie}:Props)  {

    //Context: This component is a layout to display movies with horizontal overflow (used for popular movies and upcoming movies)
    let navigate = useNavigate()

    const navigating = (id: string) => {
        navigate(`/movie/${id}`);
        console.log(typeof(id) + ":" +id)
    }

    const date = new Date(movie.release_date);
    const dateOptions = { month: "long" as const};
    
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
                    {Rating(movie.vote_average)}
                </div>
            </header>
        </article>      
    )                    

}

export default MovieCard