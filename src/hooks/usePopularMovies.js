import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";


const usePopularMovies = ()=>{

    const dispatch = useDispatch();
    const popularMoviesFromRedux = useSelector((store)=>store.movies.popularMovies);

    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        !popularMoviesFromRedux && getMovies();
    },[])
}


export default usePopularMovies;