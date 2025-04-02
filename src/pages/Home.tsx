import popularMovies from '../assets/data/movies.json';
import topMovies from '../assets/data/topRated.json'
import MovieCard from '../components/MovieCard';
import TopMovieCard from '../components/topMovieCard'
import genresData from '../assets/data/genres.json'
import styles from '../components/modules/Home.module.css'

//import Slider from '../components/Slider'
import Slider from 'react-slick'
function Home(){
    
    const popularMoviesSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const topRatedMoviesSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    //<Slider movies={topMovies} genres={genresData}></Slider>        
    {/*
    <div className={styles.Movies}>                
                    {popularMovies.map((movieData) => (
                        <MovieCard key={movieData.id} movie={movieData} />
                    ))}
    </div>       
    */}
    return(
        <main className={styles.Content}>
            {/*}Sección del inicio{*/}
            <section className={styles.Start}>
                <p className={styles.title}>Welcome</p>
                <p className={styles.subTitle}>Here you can find the rating of your favorite movies.</p>
            </section>

            {/*}Sección de peliculas populares{*/}
            <section className={styles.PopularMovies}>
                <h2>Most popular movies</h2>
                <div className={styles.Slider}>
                    <Slider {...popularMoviesSettings}>
                        {popularMovies.map((popularMovie) => (
                            <MovieCard key={popularMovie.id} movie={popularMovie} />
                        ))}
                    </Slider>
                </div>
            </section>

            {/*}Sección de peliculas mejores puntuadas{*/}                    
            <section className={styles.RatingMovies}>
                <h2>Top rated movies</h2>
                <div className={styles.topMoviesSlider}>
                    <Slider {...topRatedMoviesSettings}>
                        {topMovies.map((topMovie) =>(
                            <TopMovieCard topMovie={topMovie}></TopMovieCard>
                        ))}
                    </Slider>
                </div>
            </section>
        </main>
        
    )
}

export default Home