import Header from "./Header";
import MovieDetailVedio from "./MovieDetailVedio";
import useSelectedMovie from "../hooks/useSelectedMovie";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetailText from "./MovieDetailText";


const MovieDetails = ()=>{

    const {movieId} = useParams();
    useSelectedMovie(movieId);
    const storeTrailer = useSelector((store)=>store.movies.selectedMovie);

    return(
        <div className="bg-black">
            <Header/>
            <MovieDetailVedio storeTrailer={storeTrailer}/>
            <MovieDetailText movieId={movieId}/>
        </div>
    )
}

export default MovieDetails;