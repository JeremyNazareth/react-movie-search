import { useParams } from "react-router-dom"
import styles from "../components/modules/pages/Search.module.css"
import movies from "../assets/data/movies.json"
import genres from "../assets/data/genres.json"
import VerticalMovieList from "../components/VerticalMovieList"
import { Movie } from '../types/Movie'
import { useState, useEffect } from "react"

const Search = () => {

    const {search} = useParams();
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    
    const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    const filterMark =  (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const { id , checked } = event.target;
        setSelectedFilters((prev) => 
            checked ? [...prev, id] : prev.filter((g) => g !== id) 
        )        
        
    }

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search ? search  : "Desconocido")
    )
    
    const [currentMovies, setCurrentMovies] = useState<Movie[]>(filteredMovies);

    useEffect(() =>{
        setSearchedMovies(filteredMovies)
        setCurrentMovies(filteredMovies)  
    }, [search, movies]);

    /*
    useEffect(() =>{

        if (selectedFilters.length > 0){
            setCurrentMovies(searchedMovies.filter((movie) => selectedFilters.every((filter) => movie.genre_ids.includes(Number(filter)))))
        } else{
            setCurrentMovies(searchedMovies)
        }
    }, [selectedFilters, searchedMovies])
    */

    return (
        <main className="main-body">
            <p className={styles.title}>
                Showing results for "{search}"
            </p>
            <div className={styles.content}>
                <VerticalMovieList movieList={currentMovies} genres={genres}></VerticalMovieList>
            </div>
        </main>
    )
    
}

export default Search