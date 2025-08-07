import { useEffect, useRef, useState } from 'react';
import popularMovies from '../assets/data/movies.json';
import topMovies from '../assets/data/topRated.json'
import MovieCard from '../components/MovieCard';
import TopMovieCard from '../components/TopMovieCard';
import styles from '../components/modules/pages/Home.module.css';
import {ChevronRight} from 'lucide-react';
//import Slider from '../components/Slider'

function Home(){

    const [currentSlide, setCurrentSlide] = useState(0);       
    const [timeOutState, setTimeoutState] = useState(false);
    const moviesSliderRef = useRef<HTMLDivElement>(null);
    
    
    const changeSlide = (right: boolean) => {

        const rightSlide = (currentSlide + 1) % topMovies.length;
        const leftSlide = (currentSlide - 1 + topMovies.length) % topMovies.length;
        if(moviesSliderRef.current){
            right ? Sliding(styles.nextSlider,rightSlide) : Sliding(styles.prevSlider, leftSlide);
        }
    }
    
    const Sliding = (classStyle: string,slide: number) =>{
        setTimeoutState(true);
        if(moviesSliderRef.current){
            moviesSliderRef.current.classList.add(classStyle)
            const setSlider = setTimeout(() => {setCurrentSlide(slide)}, 500)
            const clearClass = setTimeout(() => {moviesSliderRef.current!.classList.remove(classStyle); setTimeoutState(false)},1000)
        }
        
    }

    //<Slider movies={topMovies} genres={genresData}></Slider>        
    /*
    <div className={styles.Movies}>                
                    {popularMovies.map((movieData) => (
                        <MovieCard key={movieData.id} movie={movieData} /> 
                    ))}
    </div>       
    */
    return(
        <main className='main-body' >
            {/*}Sección del inicio{*/}
            <section className={styles.Start}>
                <p className={styles.title}>Welcome</p>
                <p className={styles.subTitle}>Here you can find the rating of your favorite movies.</p>
            </section>

            {/*}Sección de peliculas populares{*/}
            <section className={styles.PopularMovies}>

                <h2 className={styles.seccionTitle}>Most popular movies</h2>
                <div className={styles.popularMoviesSlider}>
                    {popularMovies.map((popularMovie) => (
                            <MovieCard key={popularMovie.id} movie={popularMovie} />
                        ))}
                </div>
            </section>
      
            {/* Sección de peliculas mejores puntuadas */}
            <section className={styles.topMovies} id='Slider'>
                <h2 className={styles.seccionTitle}>Top rated movies</h2>
                <div className={styles.topMoviesSlider}>
                    <div id='moviesSlider' ref={moviesSliderRef} className={styles.moviesSlider}>
                        {<TopMovieCard topMovie={topMovies[currentSlide]}></TopMovieCard>}
                    </div>
                </div>
                    <div className={styles.dotsContainer} >
                        <div className={styles.prevBtn}>
                            <button className={`${styles.nextSlideBtn}`} onClick={() => changeSlide(false)} disabled={timeOutState}><ChevronRight /></button>    
                        </div>
                        
                        {topMovies.map((topMovie, i) => (
                            <button className={`${styles.dots} ${currentSlide == i ? styles.active : ""}`} key={i} onClick={() => {Sliding(styles.dotSlider,i)}} disabled={timeOutState}></button>
                        ))}
                        
                        <button className={styles.nextSlideBtn} onClick={() => changeSlide(true)} disabled={timeOutState}><ChevronRight /></button>
                    </div>
            </section>
            <p>{`${topMovies.length} currentSlide ${currentSlide}`}</p>
        </main>
    )
}

export default Home