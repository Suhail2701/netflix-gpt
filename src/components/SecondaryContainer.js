import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {

    const movies = useSelector((store) => store?.movies);
    console.log("secondary movies", movies);
    // console.log("movies.nowPlayingMovies ", movies?.nowPlayingMovies);

    return (
        <div className="bg-black ">
            {movies && <div className="-mt-64 z-30">
                <MoviesList movies={movies?.nowPlayingMovies} title={"Now Playing Movies"} />
                <MoviesList movies={movies?.popularMovies} title={"Popular Movies"} />
                <MoviesList movies={movies?.topRatedMovies} title={"Top Rated Movies"} />
                <MoviesList movies={movies?.upCommingMovies} title={"Upcomming Movies"} />
            </div>}
        </div>
    );
}

export default SecondaryContainer;