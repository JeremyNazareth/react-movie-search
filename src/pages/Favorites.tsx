import styles from "../components/modules/pages/Favorites.module.css"
import FavoriteMovieCard from "../components/FavoriteMovieCard"
import { Movie } from '../types/Movie'


const Favoritos = () =>{

    const favoriteList = JSON.parse(localStorage.getItem('FavoriteMovies') || '[]')
    return (
        <main className="main-body">
            <div>
                <h1 style={{textAlign:"start",width:"100%",marginLeft:15}}>Your favorite movies</h1>
                <div className={styles.favoriteList}>
                    {favoriteList.map((movie: Movie)=>(
                        <FavoriteMovieCard key={movie.id} movie={movie}></FavoriteMovieCard>
                    ))}
                </div>      
            </div>
            
            
        </main>
    )
}

export default Favoritos;