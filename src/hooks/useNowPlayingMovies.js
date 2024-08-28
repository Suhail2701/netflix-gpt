import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";


const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();

    const getMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        getMovies();
    },[])
}


export default useNowPlayingMovies;