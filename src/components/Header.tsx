import styles from "./header.module.css";

    
function Header(){
    return(
        <header className={styles.header}>
            <span className={styles.title}>Movie Search</span>
            <nav>
                <ul className={styles.navList}>

                </ul>

            </nav>
        </header>
        

    );
}

export default Header;