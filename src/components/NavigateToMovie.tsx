import { useNavigate } from "react-router";

const useNavigateToMovie = () =>{

    let navigate = useNavigate();

    const navigating = (id:string) => {
        navigate(`/movie/${id}`);
        console.log(typeof(id) + ":" +id)
    }

    return navigating;
}

export default useNavigateToMovie;