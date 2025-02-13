import { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import {MoveRight, MoveLeft} from 'lucide-react';


const Slider = ({movies, genres}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () =>{
        setCurrentIndex((prevIndex)=> (prevIndex + 1) % movies.length)
    };

    const prevSlide = () =>{
        setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    }

    return(
        <div className={styles.Slider}>
            <button className={styles.MoveButton} onClick={prevSlide}><MoveLeft size={40} strokeWidth={3}></MoveLeft></button>
            <div className={styles.SliderBorder}>
                <div className={styles.SliderContent} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {movies.map((movie) =>(
                        
                        <div className={styles.SliderItem} >
                            <img className={styles.ItemImg} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            <div className={styles.ItemText}>
                                <h3>{movie.title}</h3>
                                <p className={styles.ItemOverview}>{movie.overview}</p>
                                <hr className={styles.ItemHr} />
                                <div className={styles.ItemDescription}>
                                    <p>Ranking: {movie.vote_average}</p>
                                    <p>Original language: {movie.original_language}</p>
                                    <p>Release Date: {movie.release_date}</p>
                                </div>
                                <hr className={styles.ItemHr} />
                                <h3 style={{textAlign: "center"}}>Generos</h3>
                                <div className={styles.ItemGenres}>
                                    {movie.genre_ids.map((movieId) => {
                                        const genre = genres.find(genre => genre.id === movieId );
                                        return <p>{genre ? genre.name : "Desconocido"}</p>;

                                        
                                        
                                    })}   
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className={styles.MoveButton} onClick={nextSlide}><MoveRight size={40} strokeWidth={3}></MoveRight></button>
        </div>
    )
    
}

{/*
    <img className={styles.SliderImg} src={`https://image.tmdb.org/t/p/w500${movies[currentIndex].poster_path}`} alt="" />
    <p>{console.log(currentIndex)}{movies[currentIndex].title}</p>     
*/}
export default Slider;