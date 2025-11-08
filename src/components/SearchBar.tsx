import { useState } from "react"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { Movie } from '../types/Movie'
import styles from "../components/modules/components/SearchBar.module.css"
interface MovieProps{
    movies: Movie[]
}

export function SearchBar({movies}:MovieProps){
    
    /* Context: SearchBar use The Route system created from App.tsx to nagivate to certain
    routes that requires parameters
    */
    const [ search, setSearch] = useState("");
    let moviesSearch = []
    let navigate = useNavigate()

    //Function to set the string value of the input in the search hook
    const searcher = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase())
    }

    //Simple function to navigate to the Route /movie/:id?
    const navigating = (id: string) => {
        navigate(`/movie/${id}`);
        console.log(typeof(id) + ":" +id)
    }

    //A function to call the nagivation to the Route /search/:search?
    const searchNavigate = () => {
        navigate(`/search/${search}`)
    }
    
    //A function to call the serach navigation if we press enter
    const enter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            searchNavigate()
        }
    }

    //A short way to display the movies that match with the search, in the JSX is capped to 8 with .slice
    if(search){
        moviesSearch = movies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
    } else{
        moviesSearch = movies
    }

    return(
        <section className={`dropdown searcher ${styles.searcher}`}>
            <div className={`input-group mb3 dropdown-toggle ${styles.bar}`} data-bs-toggle="dropdown">
                <input className={`form-control search-input ${styles.searchBar}`} onChange={searcher} onKeyDown={enter} type="text" value={search}/>
                <button className={`input-group-text search-btn ${styles.searchBtn}`} onClick={searchNavigate}> <Search></Search> </button>
            </div>
            <ul className={`dropdown-menu ${styles.dropdownResults}`}>
                { moviesSearch.length === 0 ?(
                    <li style={{paddingLeft:10, fontSize:16, color:"black", fontWeight:600}}>No results</li>
                ) : (
                    moviesSearch.slice(0,8).map((movie, index) =>
                        <li key={index} style={{fontWeight:500}} onClick={() => navigating(movie.id.toString())}>{movie.title}</li>
                    ))}
            </ul>
        </section>
    )
}

export default SearchBar