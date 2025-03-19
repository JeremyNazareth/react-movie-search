import  styles  from '../components/modules/ActorCard.module.css'

const ActorCard = ({actor}) => {
    
    return(
        <div>
            <img className={styles.profile} src={` https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />
            <p>{actor.name}</p>
        </div>
    )
}

export default ActorCard;