import styles from "../components/modules/Favorites.module.css"
import FavoriteMovieCard from "../components/FavoriteMovieCard"
import { Movie } from '../types/Movie'


const Favoritos = () =>{

    const favoriteList = JSON.parse(localStorage.getItem('FavoriteMovies') || '[]')
    return (
        <div className="app-content">
            <h1 style={{marginBottom: 30}}>Tus peliculas favoritas.</h1>
            <div className={styles.favoriteList}>
                {favoriteList.map((movie: Movie)=>(
                    <FavoriteMovieCard movie={movie}></FavoriteMovieCard>
                ))}
            </div>  
            
        </div>
    )
}

export default Favoritos;