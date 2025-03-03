import styles from './modules/MovieCard.module.css'

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
}

interface MovieProps {    
    movie: Movie;
}
function MovieCard ({ movie } : MovieProps) {
    return(
        <div className={styles.movieCard}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <div className={styles.movieData}>
                <h3>{movie.title}</h3>
                <h4>{movie.vote_average}</h4>
            </div>
        </div>      
    );
}

export default MovieCard