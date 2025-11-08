import styles from "../components/modules/pages/Favorites.module.css"
import FavoriteMovieCard from "../components/FavoriteMovieCard"
import { Movie } from '../types/Movie'


const Favoritos = () =>{

    const favoriteList = JSON.parse(sessionStorage.getItem('FavoriteMovies') || '[]')
    
    return (
        <main className="main-body">
            <div className={styles.favoriteContainer}>
                {favoriteList.length === 0 ? (
                    <h1>Here will appear your movies added to favorites.</h1>
                ) : (
                    <div>
                        <h1 style={{textAlign:"start",width:"100%"}}>Your favorite movies</h1>
                        <div className={styles.favoriteList}>
                            {favoriteList.map((movie: Movie)=>(
                                <FavoriteMovieCard key={movie.id} movie={movie}></FavoriteMovieCard>
                            ))}
                        </div>  
                    </div>
                )}
            </div>
            
            
        </main>
    )
}

export default Favoritos;