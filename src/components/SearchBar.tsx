import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom";

export function SearchBar({movies}){
    
    const [ search, setSearch] = useState("");
    let moviesSearch = []
    let navigate = useNavigate()

    const navigating = (id) => {
        navigate(`/movie/${id}`);
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    if(search){
        moviesSearch = movies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
    } else{
        moviesSearch = movies
    }

    return(
        <div className='dropdown searcher'>
            <div className="input-group mb3 dropdown-toggle" data-bs-toggle="dropdown">
                <input className="form-control search-input" onChange={searcher} type="text" value={search}/>
                <button className="input-group-text search-btn"> <Search></Search></button>
            </div>
            <ul className="dropdown-menu">
                {moviesSearch.map((movie) =>(
                    <li onClick={() => navigating(movie.id)}>{movie.title}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default SearchBar