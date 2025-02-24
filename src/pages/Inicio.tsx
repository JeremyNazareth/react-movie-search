import popularMovies from '../assets/data/movies.json';
import topMovies from '../assets/data/topRated.json'
import MovieCard from '../components/MovieCard';
import genresData from '../assets/data/genres.json'
import styles from '../components/Inicio.module.css'
import Slider from '../components/Slider'


function Inicio(){
    return(
        <div className={styles.Content}>
            {/*}Sección del inicio{*/}
            <div className={styles.Start}>
                <h1 style={{color: "#2E8B57"}}>Movie Search</h1>
                <h4>¡Bienvenido!, aquí podras encontrar la calificación de tus peliculas preferidas.</h4>
            </div>

            {/*}Sección de peliculas populares{*/}
            <div className={styles.PopularMovies}>
                <h2>Las peliculas mas populares:</h2>
                <div className={styles.Movies}>                
                    {popularMovies.map((movieData) => (
                        <MovieCard key={movieData.id} movie={movieData} />
                    ))}
                </div>
            </div>

            {/*}Sección de peliculas mejores puntuadas{*/}                    
            <div className={styles.RatingMovies}>
                <h2>Las peliculas mejores valoradas:</h2>
                <Slider movies={topMovies} genres={genresData.genres}></Slider>                
            </div>
            
        </div>
        
    )
}

export default Inicio