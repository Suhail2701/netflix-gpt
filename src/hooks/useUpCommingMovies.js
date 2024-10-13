import { useDispatch } from "react-redux";
import { addUpCommingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";


const useUpCommingMovies = ()=>{

    const dispatch = useDispatch();

    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", OPTIONS);
        const json = await data.json();
        console.log(json?.results);
        dispatch(addUpCommingMovies(json?.results));
    }

    useEffect(()=>{
        getMovies();
    },[])
}


export default useUpCommingMovies;