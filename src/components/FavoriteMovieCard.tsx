import styles from './modules/FavoriteMovieCard.module.css'
import useNavigateToMovie from "../components/NavigateToMovie"


const FavoriteMovieCard = ({movie}) =>{

    const navigate = useNavigateToMovie()
    console.log(movie)
    return(
        <div className={styles.movie} onClick={() => navigate(movie.id)}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <h3>{movie.title}</h3>
            
        </div>
    )
}


export default FavoriteMovieCard;