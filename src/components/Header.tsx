import styles from "./modules/components/Header.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import movies from '../assets/data/movies.json'

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/home" className={styles.title}>Movie Search</Link>
            <SearchBar movies={movies}></SearchBar>
            <nav className={styles.navList}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/discover">Discover</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </nav>
        </header>
        

    );
}

export default Header;