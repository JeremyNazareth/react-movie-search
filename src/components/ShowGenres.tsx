import styles from "./modules/ShowGenres.module.css"

const ShowGenres = ({genres}) => {
    console.log("Genres recibidos:", genres);
    if (!Array.isArray(genres)) {
        console.error("ShowGenres: 'genres' no es un array", genres);
        return <p>No hay géneros disponibles</p>;
    }

    return(
        <div className={styles.GenresContainer}>
            {genres.map((genre)=> (
                <p>{genre.name}</p>
            ))}
        </div>
    )
}

export default ShowGenres