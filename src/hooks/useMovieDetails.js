import { useEffect } from "react"
import {OPTIONS} from "../utils/constants";
import { addMovieDetails } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieDetails = (id=155)=>{

    const dispatch = useDispatch();

    const handleMovieDetails = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"?language=en-US", OPTIONS);
        const json = await data.json();
        console.log("useMovieDetails hook",json);
        dispatch(addMovieDetails(json));
    }


    useEffect(()=>{handleMovieDetails()},[])
}

export default useMovieDetails;