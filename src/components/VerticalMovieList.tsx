import  useNavigateToMovie  from "../components/NavigateToMovie"
import styles from './modules/components/VerticalMovieList.module.css'
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
        <section className={styles.verticalMovieList}>
            {movieList.map((movie: Movie) =>(  
                <article key={movie.id} onClick={() => navigation(movie.id.toString())} className={styles.movie}>
                    <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    <div className={styles.movieText}>
                        <header>
                            <h3>{movie.title}</h3>
                            <h5>{movie.release_date}</h5>
                        </header>
                        <div className={styles.overview}>
                            <p className={styles.textOverview} >{movie.overview}</p>
                        </div>
                        <div className={styles.movieData}>
                            <p className={styles.rating}>{movie.vote_average.toFixed(1)}</p>
                            <div className={styles.GenresContainer}>
                                {movie.genre_ids.map((moviegenreId, index) => {
                                    let genre = genres.find(genre => genre.id === moviegenreId)
                                    return <p  className={styles.genre} key={index}>{genre ? genre.name : "No hay generos disponibles"}</p>
                                })}
                            </div>
                        </div>
                        
                    </div>
                </article>
            )
            )}
        </section>
    )
}

export default VerticalMovieList;