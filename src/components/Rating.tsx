import { useEffect } from "react";
import styles from "./modules/components/Rating.module.css"

const Rating = ({rating}) =>{

    const getColor = () =>{
        if(rating > 6.9) return styles.highRating
        if(rating < 6.0) return styles.lowRating
        if(rating < 6.9 && rating >= 5.0) return styles.mediumRating
    }
    

    return(
        <p id="Rating-value" className={`${styles.ratingValue} ${getColor()}`}>M</p>
    )
}

export default Rating