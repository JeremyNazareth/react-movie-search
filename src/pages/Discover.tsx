import VerticalMovieList from '../components/VerticalMovieList'
import movies from '../assets/data/movies.json'
import genres from '../assets/data/genres.json'
import styles from '../components/modules/pages/Discover.module.css'
import { useState, useEffect } from 'react'
import { Movie } from '../types/Movie'

function Discover(){

    //Discover is the section that the user can explore the entire list of movies from the page
    //We are going to use VerticalMovieList component to 
    
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);

    //Fuction that handle the filter method
    const HandleFilter = ()=>{
        //We only filter when is a filter checked
        if (selectedFilters.length > 0){
            //We use .filter to enter in a loop for each movie and then use every to compare each genre Id in selectedFilters list
            //with genres id in each movie
            //setSelectedMovies(movies.filter((movie) => selectedFilters.every((filter) => movie.genre_ids.includes(Number(filter)))))
            console.log(selectedFilters)
        } else{
            //if no filter selected then display the original list
            
        }
    }
    useEffect(() =>{
        
    }, [selectedFilters])
    
    console.log(selectedMovies)
    return (
        <main className='main-body'>
            <VerticalMovieList movieList={movies} genres={genres} ></VerticalMovieList>
        </main>  
    );
}

export default Discover;