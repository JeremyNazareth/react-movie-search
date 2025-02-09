import { useEffect, useState } from "react";
import styles from "./Slider.module.css"
import topRated from "../assets/data/topRated.json"

const Slider = ({movies}) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const nextSlide = () =>{
        setCurrentIndex((prevIndex)=> (prevIndex + 1) % movies.length)
    };

    const prevSlide = () =>{
        setCurrentIndex((prevIndex)=> (prevIndex - 1) % movies.length)
    }

    return(
        <div className={styles.Slider}>
            <div className={styles.SliderBorder}>
                <div className={styles.SliderContent} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {movies.map((movie) =>(
                        <div className={styles.SliderItem} >
                            <img className={styles.SliderImg} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            {movie.title}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={prevSlide}>Right</button>
            <button onClick={nextSlide}>Left</button>
        </div>
    )
    
}

{/*
    <img className={styles.SliderImg} src={`https://image.tmdb.org/t/p/w500${movies[currentIndex].poster_path}`} alt="" />
    <p>{console.log(currentIndex)}{movies[currentIndex].title}</p>     
*/}
export default Slider;