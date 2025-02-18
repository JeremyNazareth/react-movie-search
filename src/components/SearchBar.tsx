import styles from "./SearchBar.module.css"
import { useState, useEffect } from "react"
import { Search } from "lucide-react"

export function SearchBar({movies}){
    
    const [ search, setSearch] = useState(0);

    return(
        <div className='dropdown'>
            <div className="input-group mb3 dropdown-toggle" data-bs-toggle="dropdown">
                <input className="form-control search-input"  type="text" />
                <button className="input-group-text search-btn"> <Search></Search></button>
            </div>
            <ul className="dropdown-menu">
                {movies.map((movie) =>(
                    <li><a href="" className="dropdown-item">{movie.title}</a></li>    
                ))}
            </ul>
            
        </div>
    )
}

export default SearchBar