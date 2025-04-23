import { useEffect } from "react";
import styles from "./modules/components/Rating.module.css"

const Rating = ({rating}) =>{

    const getColor = () =>{
        if(rating > 6.9) return styles.highRating
        if(rating <= 4.9) return styles.lowRating
        if(rating < 6.9 && rating >= 5.0) return styles.mediumRating
    }
    

    return(
        <p id="Rating-value" className={`${styles.ratingValue} ${getColor()}`}>M {rating}</p>
    )
}

export default Rating