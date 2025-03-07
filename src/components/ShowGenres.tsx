import styles from "./modules/ShowGenres.module.css"
import {genres as genresData}  from "../assets/data/genres.json"


interface MovieGenresProps {
    movieGenres: number[]
}
const ShowGenres = ({movieGenres}:MovieGenresProps) => {

    if (!Array.isArray(movieGenres)) {
        return <p>No hay géneros disponibles</p>;
    }

    return(
        <div className={styles.GenresContainer}>
            {movieGenres.map((genreId) =>{
                const genre = genresData.find(genre => genreId === genre.id)
                return <p key={genreId}> {genre ? genre.name : genre} </p>;
            })}
        </div>
    )
}

export default ShowGenres