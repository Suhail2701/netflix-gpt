import { useDispatch, useSelector } from "react-redux";
import { addUpCommingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";


const useUpCommingMovies = ()=>{

    const dispatch = useDispatch();
    const upCommingMoviesFromRedux = useSelector((store)=>store.movies.upCommingMovies)

    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", OPTIONS);
        const json = await data.json();
        dispatch(addUpCommingMovies(json?.results));
    }

    useEffect(()=>{
       !upCommingMoviesFromRedux && getMovies();
    },[])
}


export default useUpCommingMovies;