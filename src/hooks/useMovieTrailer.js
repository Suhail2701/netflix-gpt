import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useMovieTrailer = (id)=>{

    const dispatch = useDispatch();

    const getMovieVedios = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ id +"/videos?language=en-US,", OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        // console.log(json);
        const filteredData = json.results.filter((video)=>video.type === "Trailer");
        // console.log(filteredData);
        const trailer = filteredData?filteredData[0]:json.redux[0];
        console.log(trailer);
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(()=>{
        getMovieVedios();
    },[]);

}

export default useMovieTrailer;