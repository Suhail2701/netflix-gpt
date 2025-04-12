import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {

    const movies = useSelector((store) => store?.movies);

    return (
        <div className="bg-black ">
            {movies && <div className="2xl:-mt-64 z-30">
                <MoviesList movies={movies?.nowPlayingMovies} title={"Now Playing Movies"} />
                <MoviesList movies={movies?.popularMovies} title={"Popular Movies"} />
                <MoviesList movies={movies?.topRatedMovies} title={"Top Rated Movies"} />
                <MoviesList movies={movies?.upCommingMovies} title={"Upcomming Movies"} />
            </div>}
        </div>
    );
}

export default SecondaryContainer;