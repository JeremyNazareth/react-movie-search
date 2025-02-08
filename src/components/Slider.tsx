import { useEffect, useState } from "react";
import styles from "./Slider.module.css"
import topRated from "../assets/data/topRated.json"

const Slider = ({movies}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
                    <img className={styles.SliderImg} src={`https://image.tmdb.org/t/p/w500${movies[currentIndex].poster_path}`} alt="" />
                    <p>{console.log(currentIndex)}{movies[currentIndex].title}</p>
                </div>
            </div>
            
        </div>
    )
    
}


export default Slider;