import popularMovies from '../assets/data/movies.json';
import topMovies from '../assets/data/topRated.json'
import MovieCard from '../components/MovieCard';
import genresData from '../assets/data/genres.json'
import styles from '../components/modules/Inicio.module.css'
import Slider from '../components/Slider'


function Inicio(){
    
    return(
        <main className={styles.Content}>
            {/*}Sección del inicio{*/}
            <section className={styles.Start}>
                <h1 style={{color: "#2E8B57"}}>Movie Search</h1>
                <h4>¡Bienvenido!, aquí podras encontrar la calificación de tus peliculas preferidas.</h4>
            </section>

            {/*}Sección de peliculas populares{*/}
            <section className={styles.PopularMovies}>
                <h2>Las peliculas mas populares:</h2>
                <div className={styles.Movies}>                
                    {popularMovies.map((movieData) => (
                        <MovieCard key={movieData.id} movie={movieData} />
                    ))}
                </div>
            </section>

            {/*}Sección de peliculas mejores puntuadas{*/}                    
            <section className={styles.RatingMovies}>
                <h2>Las peliculas mejores valoradas:</h2>
                <Slider movies={topMovies} genres={genresData}></Slider>                
            </section>
        </main>
        
    )
}

export default Inicio