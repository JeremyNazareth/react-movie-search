import moviesData from '../assets/data/movies.json';
import MovieCard from '../components/MovieCard';
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
                    {moviesData.map((moviesData) => (
                        <MovieCard key={moviesData.id} movie={moviesData} />
                    ))}
                </div>
            </div>

            {/*}Sección de peliculas mejores puntuadas{*/}                    
            <div className={styles.RatingMovies}>
                <h2>Las peliculas mejores valoradas:</h2>
                <Slider movies={moviesData}></Slider>                
            </div>
            
        </div>
        
    )
}

export default Inicio