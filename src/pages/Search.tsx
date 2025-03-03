import { useParams } from "react-router-dom"
import styles from "../components/modules/Search.module.css"


const Search = () => {

    const {search} = useParams();
    return (
        <div className="app-content">
            <div className={styles.temporaryContainer}>
                <p className={styles.title}>
                    Mostrando resultados para "{search}"
                </p>
                <div className={styles.content}>
                    <div className={styles.genresFilter}>
                        
                    </div>
                    <div className={styles.searchedMovies}>
                        <div className={styles.movie}>
                            <img className={styles.poster} src="https://image.tmdb.org/t/p/w500/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg" alt="" />
                            <div className={styles.movieText}>
                                <h3 style={{marginTop:10}}>Sonic El Erizo 3</h3>
                                <h5 style={{color:"gray"}}>2024-12-19</h5>
                                <p style={{color:"black", marginTop:15}}>Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.</p>
                                <p style={{fontSize:18, fontWeight:500}}>7.8</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
    
}

export default Search