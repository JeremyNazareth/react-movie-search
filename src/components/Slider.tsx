import { useEffect, useState, useRef } from "react";
import {MoveRight, MoveLeft} from 'lucide-react';
import { Movie, Genre } from '../types/Movie'
import styles from "./modules/components/Slider.module.css";
import useNavigateToMovie from "./NavigateToMovie";

interface MoviesProps {
    movies: Movie[]
}
interface GenresProps {
    genres: Genre[]
}

const Slider = ({movies, genres}:MoviesProps & GenresProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mouseState, setMouseState] = useState(false);
    const sliderInterval = useRef<number | null>(null);
    const navigate = useNavigateToMovie();
    
    
    const nextSlide = () =>{
        setCurrentIndex((prevIndex)=> (prevIndex + 1) % movies.length)
    };

    const prevSlide = () =>{
        setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    }
    
    const interval = () =>{
        
        if(!sliderInterval.current && !mouseState){
            
            sliderInterval.current = setInterval(nextSlide, 5000)
        }
    }

    const stopInterval = () =>{
        if (sliderInterval.current){
            clearInterval(sliderInterval.current)
            sliderInterval.current = null
            setMouseState(true)
            
        }
        
    }

    const mouseLeave = () =>{
        console.log("Leaving")
        setMouseState(false)
    }
    useEffect(()=>{
        interval()
    })
    

    return(
        <section className={styles.Slider} onMouseLeave={() => mouseLeave()}  onMouseEnter={() =>stopInterval()}>
            <button className={styles.MoveButton} onClick={prevSlide}><MoveLeft size={40} strokeWidth={3}></MoveLeft></button>
            <div className={styles.SliderBorder}>
                <div className={styles.SliderContent} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {movies.map((movie: Movie) =>(
                        <article key={movie.id} className={styles.SliderItem} onClick={() => navigate(movie.id.toString())}>
                            <img className={styles.ItemImg} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            <div className={styles.ItemText}>
                                <h3>{movie.title}</h3>
                                <p className={styles.ItemOverview}>{movie.overview}</p>
                                <hr className={styles.ItemHr} />
                                <div className={styles.ItemDescription}>
                                    <p>Ranking: {movie.vote_average.toFixed(1)}</p>
                                    <p>Original language: {movie.original_language}</p>
                                    <p>Release Date: {movie.release_date}</p>
                                </div>
                                <hr className={styles.ItemHr} />
                                <h3 style={{textAlign: "center"}}>Generos</h3>
                                <ul className={styles.ItemGenres}>
                                    {movie.genre_ids.map((movieId) => {
                                        const genre = genres.find(genre => genre.id === movieId );
                                        return <li key={movieId} className={styles.Genre} >{genre ? genre.name : "Desconocido"}</li>;

                                        
                                        
                                    })}   
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <button className={styles.MoveButton} onClick={nextSlide}><MoveRight size={40} strokeWidth={3}></MoveRight></button>
        </section>
    )
    
}


export default Slider;