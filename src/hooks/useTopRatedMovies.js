import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";


const useTopRatedMovies = ()=>{

    const dispatch = useDispatch();

    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", OPTIONS);
        const json = await data.json();
        console.log(json?.results);
        dispatch(addTopRatedMovies(json?.results));
    }

    useEffect(()=>{
        getMovies();
    },[])
}


export default useTopRatedMovies;