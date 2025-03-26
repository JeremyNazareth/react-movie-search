import  styles  from '../components/modules/ActorCard.module.css'
import {Actor} from '../types/Movie'

interface Props {
    actor: Actor
}
const ActorCard = ({actor}:Props) => {
    
    return(
        <div>
            <img className={styles.profile} src={` https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />
            <p>{actor.name}</p>
        </div>
    )
}

export default ActorCard;