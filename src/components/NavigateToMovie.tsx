import { useNavigate } from "react-router";

const useNavigateToMovie = () =>{

    let navigate = useNavigate();

    const navigating = (id:string) => {
        navigate(`/movie/${id}`);
        console.log("Navegando a: " + id)
    }

    return navigating;
}

export default useNavigateToMovie;