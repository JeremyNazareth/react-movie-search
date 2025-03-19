import { useParams } from "react-router-dom"
import styles from "../components/modules/Search.module.css"
import movies from "../assets/data/movies.json"
import genres from "../assets/data/genres.json"
import ShowGenres from "../components/ShowGenres"

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
    const [currentMovies, setCurrentMovies] = useState<Movie[]>([]);
    const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
    
    
    const filterMark =  (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const { id , checked } = event.target;
        setSelectedFilters((prev) => 
            checked ? [...prev, id] : prev.filter((g) => g !== id) 
        )        
        
    }

    useEffect(() =>{

        const filteredMovies =movies.filter((movie) =>
            movie.title.toLowerCase().includes(search ? search  : "Desconocido"))

        setSearchedMovies(filteredMovies)
        setCurrentMovies(filteredMovies)
        
    }, [search]);

    useEffect(() =>{

        if (selectedFilters.length > 0){
            setCurrentMovies(searchedMovies.filter((movie) =>{

                const movieGenres = Object(movie.genre_ids)
                const oneIsMatch = selectedFilters.some((filter) => movieGenres.includes(Number(filter)))
                
                function oneIsUnmatched (): boolean {
                    
                    let match = true

                    for(let a in selectedFilters){
                        let point = 0
                        
                        if(movieGenres.includes(Number(selectedFilters[a]))){
                            console.log("Point + 1")
                            point = 1 
                        } else{
                            match = false
                            console.log("Es un filtro unmatch:" + selectedFilters[a] + "point: " + point)
                            break
                        }
                        
                    }
                    return match
                } 
                console.log(oneIsMatch)
                console.log(oneIsUnmatched())
                return (oneIsMatch && oneIsUnmatched())

            }
            ))
        } else{
            setCurrentMovies(searchedMovies)
        }
    }, [selectedFilters, searchedMovies])

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
                            {genres.genres.map((genre, index) =>
                                <li key={index} className={`list-group-item ${styles.liFilter}`}><input key={genre.id} id={`${genre.id}`} onChange={filterMark} type="checkbox" className="form-check-input" /><label className={styles.checkboxLabel}>{genre.name}</label></li>
                            )}                       
                        </ul>
                    </div>
                    <div className={styles.searchedMovies}>
                        {currentMovies.map((movie) =>(
                            <div key={movie.id} className={styles.movie}>
                                <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                <div className={styles.movieText}>
                                    <h3>{movie.title}</h3>
                                    <h5>{movie.release_date}</h5>
                                    <p>{movie.overview}</p>
                                    <p className={styles.rating}>{movie.vote_average.toFixed(1)}</p>
                                    {<ShowGenres movieGenres={movie.genre_ids}></ShowGenres>} 
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