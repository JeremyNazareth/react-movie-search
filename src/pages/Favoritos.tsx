import styles from "../components/modules/Favorites.module.css"
import FavoriteMovieCard from "../components/FavoriteMovieCard"


const Favoritos = () =>{

    const favoriteList = JSON.parse(localStorage.getItem('FavoriteMovies'))
    return (
        <div className="app-content">
            <h1 style={{marginBottom: 30}}>Tus peliculas favoritas.</h1>
            <div className={styles.favoriteList}>
                {favoriteList.map((movie)=>(
                    <FavoriteMovieCard movie={movie}></FavoriteMovieCard>
                ))}
            </div>  
            
        </div>
    )
}

export default Favoritos;