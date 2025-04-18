import styles from "../components/modules/pages/Favorites.module.css"
import FavoriteMovieCard from "../components/FavoriteMovieCard"
import { Movie } from '../types/Movie'


const Favoritos = () =>{

    const favoriteList = JSON.parse(localStorage.getItem('FavoriteMovies') || '[]')
    return (
        <main className="main-body">
            <h1 style={{textAlign:"start",width:"100%",marginLeft:325}}>Your favorite movies</h1>
            <div className={styles.favoriteList}>
                {favoriteList.map((movie: Movie)=>(
                    <FavoriteMovieCard key={movie.id} movie={movie}></FavoriteMovieCard>
                ))}
            </div>  
            
        </main>
    )
}

export default Favoritos;