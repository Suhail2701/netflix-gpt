import { useDispatch, useSelector } from "react-redux";
import { addSelectedMovie } from "../utils/moviesSlice";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useSelectedMovie = (id)=>{

    const dispatch = useDispatch();
    const selectedMovieFromRedux = useSelector((store)=>store.movies.selectedMovie)

    const getMovieVedios = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ id +"/videos?language=en-US,", OPTIONS);
        const json = await data.json();
        const filteredData = json.results.filter((video)=>video.type === "Trailer");
        const trailer1 = filteredData?filteredData[0]:json.redux[0]
        dispatch(addSelectedMovie(trailer1));
    }

 
    useEffect(() => {
        if (id) {
            getMovieVedios();
        }
    }, [id]); 

}

export default useSelectedMovie;