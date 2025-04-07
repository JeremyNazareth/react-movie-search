import { Movie } from '../types/Movie'
import styles from './modules/topMovieCard.module.css'
import useNavigateToMovie from './NavigateToMovie';
import genresData from '../assets/data/genres.json'

interface Props{
    topMovie: Movie;
}
const topMovieCard = ({topMovie}: Props) => {

    const navigate = useNavigateToMovie();

    return(
        <article key={topMovie.id} className={styles.SliderItem} onClick={() => navigate(topMovie.id.toString())}>
            <img className={styles.ItemImg} src={`https://image.tmdb.org/t/p/w500${topMovie.poster_path}`} alt="" />
            <header className={styles.ItemText}>
                <h3>{topMovie.title}</h3>
                <h5>{topMovie.release_date}</h5>
                <p className={styles.ItemOverview}>{topMovie.overview}</p>
                <hr className={styles.ItemHr} />
                <div className={styles.ItemDescription}>
                    <p>Ranking: {topMovie.vote_average.toFixed(1)}</p>
                    <p>Original language: {topMovie.original_language}</p>
                    <p>Release Date: {topMovie.release_date}</p>
                </div>
                <hr className={styles.ItemHr} />
                <div className={styles.movieGenres}>
                    <h3>Genres</h3>
                    <ul className={styles.genresList}>
                        {topMovie.genre_ids.map((movieGenre, index) => {
                            const genreName = genresData.find((genre) => movieGenre === genre.id)?.name
                            return genreName ? <li className={styles.genreItem} key={index}>{genreName}</li> : null;
                        })}
                    </ul>
                </div>
                
            </header>
        </article>
    )
}

export default topMovieCard;