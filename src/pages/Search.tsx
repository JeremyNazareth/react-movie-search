import { useParams } from "react-router-dom"
import styles from "../components/modules/Search.module.css"
import movies from "../assets/data/movies.json"

const Search = () => {

    const {search} = useParams();

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search ? search  : "Desconocido")
    )
    return (
        <div className="app-content">
            <div className={styles.temporaryContainer}>
                <p className={styles.title}>
                    Mostrando resultados para "{search}"
                </p>
                <div className={styles.content}>
                    <div className={styles.genresFilter}>
                        
                    </div>
                    <div className={styles.searchedMovies}>
                        {filteredMovies.map((movie) =>(
                            <div className={styles.movie}>
                                <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                <div className={styles.movieText}>
                                    <h3>{movie.title}</h3>
                                    <h5>{movie.release_date}</h5>
                                    <p>{movie.overview}</p>
                                    <p className={styles.rating}>{movie.vote_average.toFixed(1)}</p>
                                    
                                </div>
                            </div>
                        )
                        )}
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
    
}

export default Search