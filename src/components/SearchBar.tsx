import { useState } from "react"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { Movie } from '../types/Movie'
import styles from "../components/modules/components/SearchBar.module.css"
interface MovieProps{
    movies: Movie[]
}

export function SearchBar({movies}:MovieProps){
    
    const [ search, setSearch] = useState("");
    let moviesSearch = []
    let navigate = useNavigate()

    
    const searcher = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase())
    }

    const navigating = (id: string) => {
        navigate(`/movie/${id}`);
        console.log(typeof(id) + ":" +id)
    }

    const searchNavigate = () => {
    
        navigate(`/search/${search}`)
    }
    
    const enter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            searchNavigate()
        }
        
    }

    if(search){
        moviesSearch = movies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
        if(!moviesSearch){

        }
    } else{
        moviesSearch = movies
    }

    return(
        <section className={`dropdown searcher ${styles.searchBar}`}>
            <div className={`input-group mb3 dropdown-toggle ${styles.bar}`} data-bs-toggle="dropdown" style={{minHeight:35}}>
                <input className="form-control search-input" style={{height:35}} onChange={searcher} onKeyDown={enter} type="text" value={search}/>
                <button className="input-group-text search-btn" onClick={searchNavigate}> <Search></Search> </button>
            </div>
            <ul className="dropdown-menu">
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