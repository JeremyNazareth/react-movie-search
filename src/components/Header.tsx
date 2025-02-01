import styles from "./header.module.css";

    
function Header(){
    return(
        <header className={styles.header}>
            <span className={styles.title}>Movie Search</span>
            <nav>
                <ul className={styles.navList}>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Tendencia</a></li>
                    <li><a href="">Favoritos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>

            </nav>
        </header>
        

    );
}

export default Header;