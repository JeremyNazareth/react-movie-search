import { useEffect, useRef, useState } from 'react';
import popularMovies from '../assets/data/movies.json';
import topMovies from '../assets/data/topRated.json'
import MovieCard from '../components/MovieCard';
import TopMovieCard from '../components/TopMovieCard'
import styles from '../components/modules/pages/Home.module.css'
//import Slider from '../components/Slider'
import Slider from 'react-slick'
function Home(){
    
    const [slides, setSlides] = useState(5);
    const [width, setWidth] = useState(0);
    const containerRef = useRef(null);

    const popularMoviesSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
    };

    

    useEffect(() => {
        if(containerRef.current){
            const observer = new ResizeObserver((entries) =>{
                const entry = entries[0];
                setWidth(entry.contentRect.width)
            })
            observer.observe(containerRef.current)
        }
        console.log(width)
    }, [])
    

    useEffect (() =>{
        console.log(width + " " + slides)
        if (width <= 1350 && width >= 1101){
            setSlides(4);    
        }
        else if ( width <= 1101){
            setSlides(3);
        } else{
            setSlides(5);
        }
        popularMoviesSettings.slidesToShow = slides;
    }, [width])

    const topRatedMoviesSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

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
        <main className='main-body' ref={containerRef}>
            {/*}Sección del inicio{*/}
            <section className={styles.Start}>
                <p className={styles.title}>Welcome</p>
                <p className={styles.subTitle}>Here you can find the rating of your favorite movies.</p>
            </section>

            {/*}Sección de peliculas populares{*/}
            <section className={styles.PopularMovies}>
                
                <div className={styles.popularMoviesSlider}>
                <h2>Most popular movies</h2>
                    <Slider {...popularMoviesSettings}>
                        {popularMovies.map((popularMovie) => (
                            <MovieCard key={popularMovie.id} movie={popularMovie} />
                        ))}
                    </Slider>
                </div>
            </section>

            {/*}Sección de peliculas mejores puntuadas{*/}                    
            <section className={styles.RatingMovies} id='Slider'>
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