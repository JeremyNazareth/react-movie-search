import styles from "./modules/ShowGenres.module.css"

const ShowGenres = ({genres}) => {

    if (!Array.isArray(genres)) {\
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