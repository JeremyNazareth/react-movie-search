import styles from './modules/MovieCard.module.css'
import { useNavigate } from "react-router-dom";
import { Movie } from '../types/Movie'
import { Heart } from 'lucide-react'
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
            <div className={styles.cover}>
                <div className={styles.favoriteTag}>
                    <Heart size={20} strokeWidth={2.55} color={'white'} />
                </div>
                <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            </div>
            
            <header className={styles.movieData}>
                <h3>{movie.title}</h3>
                <h4>{movie.release_date}</h4>
                <div className={styles.Rating}>
                    <p className={styles.RatingLogo}>M</p>
                    <p className={styles.RatingValue}>{movie.vote_average.toFixed(1)}</p>
                </div>
                
            </header>
        </article>      
    );
}

export default MovieCard