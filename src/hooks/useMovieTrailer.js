import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useMovieTrailer = (id)=>{

    const dispatch = useDispatch();
    const movieTrailerFromRedux = useSelector((store)=>store.movies.movieTrailer);

    const getMovieVedios = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ id +"/videos?language=en-US,", OPTIONS);
        const json = await data.json();
        const filteredData = json.results.filter((video)=>video.type === "Trailer");
        const trailer = filteredData?filteredData[0]:json.redux[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(()=>{
        !movieTrailerFromRedux && getMovieVedios();
    },[]);

}

export default useMovieTrailer;