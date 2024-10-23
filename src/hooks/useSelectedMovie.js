import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../utils/moviesSlice";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useSelectedMovie = (id)=>{

    const dispatch = useDispatch();

    const getMovieVedios = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ id +"/videos?language=en-US,", OPTIONS);
        const json = await data.json();
        console.log(json.results);
        // console.log(json);
        const filteredData = json.results.filter((video)=>video.type === "Trailer");
        // console.log(filteredData);
        const trailer1 = filteredData?filteredData[0]:json.redux[0];
        // console.log(trailer);
        dispatch(addSelectedMovie(trailer1));
    }

    useEffect(()=>{
        getMovieVedios();
    },[]);

}

export default useSelectedMovie;