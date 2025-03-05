import { useParams } from "react-router-dom"
import styles from "../components/modules/Search.module.css"
import movies from "../assets/data/movies.json"
import genres from "../assets/data/genres.json"
import { useState, useEffect } from "react"
const Search = () => {

    interface Movie {
        id: number,
        title: string,
        poster_path: string,
        overview: string,
        vote_average: number, 
        original_language: string,
        release_date: string,
        genre_ids: number[]
    }

    const {search} = useParams();
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

    
    
    const test =  (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const { id , checked } = event.target;
        setSelectedFilters((prev) => 
        checked ? [...prev, id] : prev.filter((g) => g !== id) 
        )        
        
    }

    console.log(selectedFilters)
    useEffect(() =>{
        setFilteredMovies(movies.filter((movie) =>
            movie.title.toLowerCase().includes(search ? search  : "Desconocido")))        
    }, [search]);

    useEffect(() =>{
        if (selectedFilters.length > 0){
            console.log("hola")
            setFilteredMovies(filteredMovies.filter((movie) =>
                movie.genre_ids.some((genre) => selectedFilters.includes(genre.toString()))
                
            ))
        } else{
            setFilteredMovies(movies)
        }
    }, [selectedFilters, movies])
    
    {/*
        setFilteredMovies(currentMovies.filter((movie) =>{
            movie.genre_ids.some((genre) => selectedFilters.includes(genre.toString()));
        }))
        */}

    return (
        <div className="app-content">
            <div className={styles.temporaryContainer}>
                <p className={styles.title}>
                    Mostrando resultados para "{search}"
                </p>
                <div className={styles.content}>
                    <div className={`card  ${styles.genresFilter}`}>
                        <div className={`card-header`}>
                            <p className={styles.filterTitle}>Filtros</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            {genres.genres.map((genre) =>
                                <li className={`list-group-item ${styles.liFilter}`}><input id={`${genre.id}`} onChange={test} type="checkbox" className="form-check-input" /><label className={styles.checkboxLabel}>{genre.name}</label></li>
                            )}                       
                        </ul>
                    </div>
                    <div className={styles.searchedMovies}>
                        {filteredMovies.map((movie) =>(
                            <div className={styles.movie}>
                                <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                <div className={styles.movieText}>
                                    <h3>{movie.title}</h3>
                                    <h5>{movie.release_date}</h5>
                                    <p>{movie.overview}</p>
                                    <p className={styles.rating}>{movie.vote_average.toFixed(1)}</p>
                                    
                                </div>
                            </div>
                        )
                        )}
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
    
}

export default Search