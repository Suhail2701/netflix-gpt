import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import '../index.css';
import { Link } from "react-router-dom";

const MoviesCard = ({movies})=>{

  
    return (
        
        <div className=" flex overflow-x-scroll gap-2 hide-scrollbar ">
            {movies && movies?.map((movie,index)=> 
            {
                if(!movie.poster_path) return null;
                return <Link to={"/browse/movieDetails/"+movie?.id} key={movie?.id}  className="w-32 lg:w-48 transform transition-transform duration-300 hover:scale-105 cursor-pointer shrink-0" >
            
                <img className=" w-32 lg:w-48 transform transition-transform duration-300 hover:scale-105 cursor-pointer"  src={IMG_CDN_URL+ movie.poster_path} alt="image"/>
                </Link>
            }
             )}
            
        </div>
    )
}

export default MoviesCard;  
