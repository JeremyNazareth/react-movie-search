import styles from "./modules/components/Header.module.css";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import movies from '../assets/data/movies.json'
import { useState, useEffect } from "react";

function Header(){

    let [ isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navClass = `${isOpen ? styles.mobileNavbar : styles.navbar + " " + styles.mobileNavbarToggle}`
    useEffect(() => {

        setIsOpen(false);
    }, [location.pathname]);
    return(
        <header className={styles.header} >
                <div className={styles.headerContainer}>
                    
                    <div className={styles.btnHam} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>          
                        <span></span>          
                        <span></span>          
                    </div>
                    
                    <div className={styles.titleContainer} >
                        <Link 
                        to="/home" 
                        onClick={() => setIsOpen(false)}
                        className={styles.title} 
                        
                        >MovieSearch</Link>
                    </div>
                    
                    <div className={styles.search}>
                        
                        <SearchBar movies={movies}></SearchBar>
                    </div>
                    
                    <nav className={navClass}>
                        <ul className={styles.navUl}>
                            <li>
                                <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
                            </li>
                            <li>
                                <Link to="/discover" onClick={() => setIsOpen(false)}>Discover</Link>
                            </li>
                            <li>
                                <Link to="/favorites" onClick={() => setIsOpen(false)}>Favorites</Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                            </li>
                        </ul>
                    </nav>
                    
                </div>

        </header>
        

    );
}

export default Header;