import  useNavigateToMovie  from "../components/NavigateToMovie"
import styles from './modules/VerticalMovieList.module.css'
import { Movie, Genre } from '../types/Movie'

interface MovieListProps{
    movieList: Movie[]
}

interface GenresProps{
    genres: Genre[]
}
const VerticalMovieList = ({movieList, genres}:MovieListProps & GenresProps) => {
    
    let navigation = useNavigateToMovie();
    
    return(
        <section>
            {movieList.map((movie: Movie) =>(  
                <article key={movie.id} onClick={() => navigation(movie.id.toString())} className={styles.movie}>
                    <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    <div className={styles.movieText}>
                        <h3>{movie.title}</h3>
                        <h5>{movie.release_date}</h5>
                        <p>{movie.overview}</p>
                        <p className={styles.rating}>{movie.vote_average.toFixed(1)}</p>
                        <div className={styles.GenresContainer}>
                            {movie.genre_ids.map((moviegenreId, index) => {
                                let genre = genres.find(genre => genre.id === moviegenreId)
                                return <p key={index}>{genre ? genre.name : "No hay generos disponibles"}</p>
                            })}
                        </div>
                    </div>
                </article>
            )
            )}
        </section>
    )
}

export default VerticalMovieList;