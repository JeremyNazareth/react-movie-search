
import styles from './modules/VerticalMovieList.module.css'


const VerticalMovieList = ({movieList, genres}) => {
    
    return(
        <div>
            {movieList.map((movie) =>(  
                <div key={movie.id} className={styles.movie}>
                    <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    <div className={styles.movieText}>
                        <h3>{movie.title}</h3>
                        <h5>{movie.release_date}</h5>
                        <p>{movie.overview}</p>
                        <p className={styles.rating}>{movie.vote_average.toFixed(1)}</p>
                        <div className={styles.GenresContainer}>
                            {movie.genre_ids.map((moviegenreId) => {
                                let genre = genres.find(genre => genre.id === moviegenreId)
                                
                                return <p>{genre ? genre.name : "No hay generos disponibles"}</p>
                            })}
        </div>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default VerticalMovieList;