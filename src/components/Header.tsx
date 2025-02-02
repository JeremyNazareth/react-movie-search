import styles from "./header.module.css";
import { Link } from "react-router-dom";
    
function Header(){
    return(
        <header className={styles.header}>
            <Link to="/Inicio" className={styles.title}>Movie Search</Link>
            <nav className={styles.navList}>
                <li>
                    <Link to="/Inicio">Inicio</Link>
                </li>
                <li>
                    <Link to="/tendencias">Tendencias</Link>
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