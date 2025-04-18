import { Link } from 'react-router-dom';
import styles from '../components/modules/components/Footer.module.css'

const Footer = () =>{

    

    return(
        <footer className={styles.footer}>

            
            
            <div className={styles.navBar}>
                <p className={styles.footerTitle}>MovieSearch</p>
                <nav>
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
                        <Link to="/contact">Contact</Link>
                    </li>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;