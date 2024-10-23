import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpCommingMovies from "../hooks/useUpCommingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";


const Browse = ()=>{

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpCommingMovies();
    const gptView = useSelector((store)=>store.gpt.showGptSearch);

    return(
        <div className="bg-black">
             <Header/>
            {gptView?<GptSearch/>:<><MainContainer/>
                <SecondaryContainer/></>}   
        </div>
    )
}

export default Browse;