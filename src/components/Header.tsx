import styles from "./header.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import movies from '../assets/data/movies.json'

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/Inicio" className={styles.title}>Movie Search</Link>
            <SearchBar movies={movies}></SearchBar>
            <nav className={styles.navList}>
                <li>
                    <Link to="/inicio">Inicio</Link>
                </li>
                <li>
                    <Link to="/descubrir">Descubrir</Link>
                </li>
                <li>
                    <Link to="/favoritos">Favoritos</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
            </nav>
        </header>
        

    );
}

export default Header;