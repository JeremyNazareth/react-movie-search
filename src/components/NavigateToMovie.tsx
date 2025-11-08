import { useNavigate } from "react-router";

const useNavigateToMovie = () =>{

    //Context: Component used to automate the navigation 
    let navigate = useNavigate();

    const navigating = (id:string) => {
        navigate(`/movie/${id}`);
        console.log("Navegando a: " + id)
    }

    return navigating;
}

export default useNavigateToMovie;