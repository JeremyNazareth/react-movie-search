import  styles  from '../components/modules/components/ActorCard.module.css'
import { Actor } from '../types/Movie'
import maleHead from '../assets/undifined/male-head.webp'

interface Props {
    actor: Actor
}
const ActorCard = ({actor}:Props) => {
    
    return(
        <article className={styles.actorCard}>
            {actor.profile_path ? <img className={styles.profile} src={` https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" /> : <img className={styles.profile} src={maleHead}/>}
            <p className={styles.actorName}>{actor.name}</p>
            <p>{actor.character}</p>
        </article>
    )
}

export default ActorCard;