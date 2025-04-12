import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMoviesList = () => {
    const gptResults = useSelector((store) => store.gpt);
    const { movieNames, moviesList } = gptResults;
    if (!movieNames) return null;
    return (
        <div className=" overflow-y-scroll overflow-hidden h-[800px] md:h-[1200px] lg:h-[1200px]  hide-scrollbar pr-2 ">
            {movieNames.map((movie, index) => {
                return <MoviesList movies={moviesList[index]} title={movie} />
            })}
        </div>
    )
}

export default GptMoviesList;