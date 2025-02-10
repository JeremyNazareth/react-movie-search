import { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import {MoveRight, MoveLeft} from 'lucide-react';

const Slider = ({movies}) => {
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
                                <p className={styles.ItemTitle}>{movie.title}</p>
                                <hr className={styles.ItemHr} />
                                <p className={styles.ItemOverview}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam molestiae similique unde deserunt vel ut ipsum voluptatum id. Esse ex commodi officia ipsa, odit nulla facilis veniam atque perferendis corrupti.</p>
                                <hr className={styles.ItemHr} />
                                <div className={styles.ItemDescription}>
                                    <p>Descripcion1: descripcion 1</p>
                                    <p>Descripcion2: descripcion 2</p>
                                    <p>Descripcion3: descripcion 3</p>
                                </div>
                                <hr className={styles.ItemHr} />
                                <p>Generos</p>
                                <div className={styles.ItemGenres}>
                                    <p>Genero1</p>
                                    <p>Genero2</p>
                                    <p>Genero3</p>
                                    <p>Genero4</p>
                                    
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