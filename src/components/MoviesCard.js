import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import '../index.css';

const MoviesCard = ({movies})=>{

    // const movies = useSelector((store)=> store.movies.nowPlayingMovies);
    console.log("MoviesCard",movies );
    return (
        
        <div className=" flex overflow-x-scroll gap-2 hide-scrollbar">
            {movies && movies?.map((movie,index)=> <img className="w-48" key={index} src={IMG_CDN_URL+ movie.poster_path} alt="image"/>)}
            
        </div>
    )
}

export default MoviesCard;  