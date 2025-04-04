import { useParams } from "react-router-dom"
import styles from "../components/modules/Search.module.css"
import movies from "../assets/data/movies.json"
import genres from "../assets/data/genres.json"
import VerticalMovieList from "../components/VerticalMovieList"
import { Movie } from '../types/Movie'

import { useState, useEffect } from "react"
const Search = () => {

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
            setCurrentMovies(searchedMovies.filter((movie) => selectedFilters.every((filter) => movie.genre_ids.includes(Number(filter)))))
        } else{
            setCurrentMovies(searchedMovies)
        }
    }, [selectedFilters, searchedMovies])

    return (
        <main className="app-content">
            <section className={styles.temporaryContainer}>
                <p className={styles.title}>
                Showing results for "{search}"
                </p>
                <div className={styles.content}>
                    <div className={`card  ${styles.genresFilter}`}>
                        <div className={`card-header`}>
                            <p className={styles.filterTitle}>Filters</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            {genres.map((genre, index) =>
                                <li key={index} className={`list-group-item ${styles.liFilter}`}><input key={genre.id} id={`${genre.id}`} onChange={filterMark} type="checkbox" className="form-check-input" /><label className={styles.checkboxLabel}>{genre.name}</label></li>
                            )}                       
                        </ul>
                    </div>
                    <div className={styles.searchedMovies}>
                    <VerticalMovieList movieList={currentMovies} genres={genres}></VerticalMovieList>
                    </div>
                </div>
            </section>
            
        </main>
    )
    
}

export default Search