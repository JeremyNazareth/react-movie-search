import styles from './modules/components/FavoriteMovieCard.module.css'
import useNavigateToMovie from "../components/NavigateToMovie"
import { Movie } from '../types/Movie'

interface Props{
    movie: Movie
}

const FavoriteMovieCard = ({movie}:Props) =>{

    const date = new Date(movie? movie.release_date : "00/00/0000");
    const movieDate = `${new Intl.DateTimeFormat("en-US", {month: "long"}).format(date)} ${date.getDay().toString()}, ${date.getFullYear().toString()}`
    const navigate = useNavigateToMovie()
    return(
        <article className={styles.movie} onClick={() => navigate(movie.id.toString())}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <div className={styles.movieData}>
                <h3>{movie.title}</h3>
                <h6>{movieDate}</h6>
                <h6>{movie.overview}</h6>
                <h6>{movie.vote_average.toFixed(1)}</h6>
            </div>

        </article>
    )
}


export default FavoriteMovieCard;