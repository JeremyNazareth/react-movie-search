import styles from './modules/FavoriteMovieCard.module.css'
import useNavigateToMovie from "../components/NavigateToMovie"
import { Movie } from '../types/Movie'

interface Props{
    movie: Movie
}

const FavoriteMovieCard = ({movie}:Props) =>{

    const navigate = useNavigateToMovie()
    console.log(movie)
    return(
        <article className={styles.movie} onClick={() => navigate(movie.id.toString())}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <h3>{movie.title}</h3>
        </article>
    )
}


export default FavoriteMovieCard;