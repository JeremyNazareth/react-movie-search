import { useRef, useState } from 'react';
import popularMovies from '../assets/data/movies.json';
import topMovies from '../assets/data/topRated.json'
import upcomingMovies from '../assets/data/upcoming.json'
import MovieCard from '../components/MovieCard';
import TopMovieCard from '../components/TopMovieCard';
import styles from '../components/modules/pages/Home.module.css';
import {ChevronRight, ArrowRightFromLine}  from 'lucide-react';


function Home(){

    /*Home.tsx Context: Home page have 2 layout for displaying movies, one is a simple horizontal overflow
    and the other is a custom slider that I create that Top movies uses
    */
    const [currentSlide, setCurrentSlide] = useState(0);       
    const [timeOutState, setTimeoutState] = useState(false);

    //We use a ref to control the data from the Top Movie that is displaying
    const moviesSliderRef = useRef<HTMLDivElement>(null);
    
    /*This function is responsible to define the next movie or the previous one according to topMovie list order
    the function need the boolean right because we need to know which button has been pressed then according of which button
    was previous pressed we decide if use the next or previous movie data.
    */
    const changeSlide = (right: boolean) => {

        //We use a basic calculation to know that movie is next or previous
        const rightSlide = (currentSlide + 1) % topMovies.length;
        const leftSlide = (currentSlide - 1 + topMovies.length) % topMovies.length;
        if(moviesSliderRef.current){
            //then when we have already defined the side of the movies we use the Sliding function to do the slide according to the buttons
            right ? Sliding(styles.nextSlider,rightSlide) : Sliding(styles.prevSlider, leftSlide);
        }
    }
    
    /* This function do the slide and requires a string containing the name of one of the two classes "nextSlider" or "prevSlider" since
    both have a different animation configured with @keyframes
    Also the function requires de position number of the next movie that we need to be our slide
     */
    const Sliding = (classStyle: string,slide: number) =>{
        setTimeoutState(true);
        if(moviesSliderRef.current){
            //We add the class to the container to play the animation of the class
            moviesSliderRef.current.classList.add(classStyle)
            //We change the data at an interval where the animation has an opacity of 0 to hide the data change
            setTimeout(() => {setCurrentSlide(slide)}, 500)
            //And we clear the timeouts and the class to do the future animations
            setTimeout(() => {moviesSliderRef.current!.classList.remove(classStyle); setTimeoutState(false)},1000)
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
            <section className={`${styles.popularMovies} ${styles.movieSection}`}>
                <h2 className={styles.seccionTitle}>Most popular movies</h2>
                <div className={styles.popularMoviesContainer} >
                    <div className={styles.popularMoviesSlider}>
                        {popularMovies.map((popularMovie,i) => (
                            <MovieCard key={`${popularMovie.id}-${i}`} movie={popularMovie} />
                        ))}
                    </div>
                    
                </div>
            </section>
            
            <section className={`${styles.popularMovies} ${styles.movieSection}`}>
                <h2 className={styles.seccionTitle}>Upcoming Movies</h2>
                <div className={styles.popularMoviesContainer} >
                    <div className={styles.popularMoviesSlider}>
                        {upcomingMovies.map((upcomingMovies, i) => (
                            <MovieCard key={upcomingMovies.id + '-' + i} movie={upcomingMovies} />
                        ))}
                    </div>
                    
                </div>
            </section>
            {/* Sección de peliculas mejores puntuadas */}
            <section className={`${styles.topMovies} ${styles.movieSection}`} id='Slider'>
                {/*<h2 className={styles.seccionTitle}>Top rated movies</h2>*/}
                <h2 className={styles.seccionTitle}>Most rated movies</h2>
                <div className={styles.topMoviesSlider} id='moviesSlider' ref={moviesSliderRef}>
                    {<TopMovieCard topMovie={topMovies[currentSlide]}></TopMovieCard>}
                </div>

                    <div className={styles.dotsContainer} >
                        <div className={styles.prevBtn}>
                            <button className={`${styles.nextSlideBtn}`} onClick={() => changeSlide(false)} disabled={timeOutState}><ChevronRight /></button>    
                            <button className={`${styles.nextSlideBtnLine}`} onClick={() => Sliding(styles.dotSlider,0)} disabled={timeOutState}><ArrowRightFromLine /></button>
                        </div>
                        
                        {topMovies.map((_, i) => (
                            <button className={`${styles.dots} ${currentSlide == i ? styles.active : ""}`} key={i} onClick={() => {Sliding(styles.dotSlider,i)}} disabled={timeOutState}></button>
                        ))}
                        <div>
                            <button className={styles.nextSlideBtn} onClick={() => changeSlide(true)} disabled={timeOutState}><ChevronRight /></button>
                            <button className={`${styles.nextSlideBtnLine} ${styles.nextSlideBtn}`}  onClick={() => Sliding(styles.dotSlider,topMovies.length - 1)} disabled={timeOutState}><ArrowRightFromLine /></button>
                        </div>
                        
                    </div>
            </section>
            
        </main>
    )
}

export default Home