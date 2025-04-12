import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";


const useTopRatedMovies = ()=>{

    const dispatch = useDispatch();
    const topRatedMoviesFromRedux = useSelector((store)=>store.movies.topRatedMovies)

    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results));
    }

    useEffect(()=>{
       !topRatedMoviesFromRedux && getMovies();
    },[])
}


export default useTopRatedMovies;