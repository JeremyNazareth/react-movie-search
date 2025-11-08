import { Movie } from '../types/Movie'
import styles from './modules/components/topMovieCard.module.css'
import useNavigateToMovie from './NavigateToMovie';
import genresData from '../assets/data/genres.json';
import Rating from "../components/Rating";

interface Props{
    topMovie: Movie;
}
const topMovieCard = ({topMovie}: Props) => {

    //Context: Layout to display the movie with the best ranking by the TMDB API
    const navigate = useNavigateToMovie();

    const date = new Date(topMovie.release_date)
    const movieDate = `${Intl.DateTimeFormat("en-US", {month:"long"}).format(date)} ${date.getDay().toString()}, ${date.getFullYear().toString()}`

    const languages: { [key:string] : string} ={
        en: "English",
        es: "Spanish",
        it: "Italian",
        ja: "Japanese",
        hi: "Hindi",
        ko: "Korean"
    }

    return(
        <article key={topMovie.id} className={styles.sliderItem} onClick={() => navigate(topMovie.id.toString())}>
           <div className={styles.movieImageContainer}>
                <div className={styles.imageWrapper}>
                    <img className={styles.ItemImg} src={`https://image.tmdb.org/t/p/w500${topMovie.poster_path}`} alt="" />
                </div>
           </div>
            
            <header className={styles.movieTextContainer}>
                <div className={styles.textContainer}>
                    <h3>{topMovie.title}</h3>
                    <h5>{movieDate}</h5>
                    <p className={styles.ItemOverview}>{topMovie.overview}</p>
                    <hr className={styles.ItemHr} />
                    <ul className={styles.ItemDescription}>
                        <li className={styles.ranking}><Rating rating={topMovie.vote_average.toFixed(1)}></Rating></li>
                        <li><span className={styles.label}>Original language: </span>              <span className={styles.value}> {languages[topMovie.original_language]}</span></li>
                        <li><span className={styles.label}>Release Date: </span>                   <span className={styles.value}>{topMovie.release_date}</span></li>
                    </ul>
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
                </div>
            </header>
        </article>
    )
}

export default topMovieCard;