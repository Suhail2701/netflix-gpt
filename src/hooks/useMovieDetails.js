import { useEffect } from "react"
import {OPTIONS} from "../utils/constants";
import { addMovieDetails } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieDetails = (id=155)=>{

    const dispatch = useDispatch();
    const movieDetailsFromReducx = useSelector((store)=>store.movies.movieDetails)

    const handleMovieDetails = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"?language=en-US", OPTIONS);
        const json = await data.json();
        dispatch(addMovieDetails(json));
    }

    useEffect(() => {
        if (id) {
            handleMovieDetails()
        }
    }, [id]); 
}

export default useMovieDetails;