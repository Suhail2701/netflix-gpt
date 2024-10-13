import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";


const usePopularMovies = ()=>{

    const dispatch = useDispatch();

    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        getMovies();
    },[])
}


export default usePopularMovies;