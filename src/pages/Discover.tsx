import VerticalMovieList from '../components/VerticalMovieList'
import movies from '../assets/data/movies.json'
import genres from '../assets/data/genres.json'
import styles from '../components/modules/pages/Discover.module.css'
import { useState, useEffect } from 'react'
import { Movie } from '../types/Movie'

function Discover(){

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);
    const filterMark =  (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const { id , checked } = event.target;
        setSelectedFilters((prev) => 
            checked ? [...prev, id] : prev.filter((g) => g !== id) 
        )        
        
    }
    
    useEffect(() =>{
        if (selectedFilters.length > 0){
            setSelectedMovies(movies.filter((movie) => selectedFilters.every((filter) => movie.genre_ids.includes(Number(filter)))))
            console.log(selectedFilters)
        } else{
            setSelectedMovies(movies)
        }
    }, [selectedFilters])
    
    console.log(selectedMovies)
    return (
        <main className='main-body'>
            <div className={styles.content}>
                <VerticalMovieList movieList={selectedMovies} genres={genres} ></VerticalMovieList>
            </div>
            
        </main>  
    );
}

export default Discover;