import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";

const MovieDetailText = ({ movieId }) => {

    useMovieDetails(movieId);

    const movieDetails = useSelector((store) => store?.movies?.movieDetails);
    console.log("Movie Details in MovieDetails comp", movieDetails);
    return (
        <div className="bg-black text-white flex flex-col gap-8 py-14">
            <div className="text-center flex flex-col gap-5 w-10/12 mx-auto">
                <h1 className="text-3xl font-bold">{movieDetails?.title}</h1>
                <p className="text-lg">{movieDetails?.overview}</p>
            </div>
            <div className="w-3/12 mx-auto text-center  flex flex-col gap-6">
                <h1 className="text-2xl font-bold">Movie Details</h1>
                <div className="   flex flex-col justify-center text-left gap-3 pl-40 text-lg font-semibold">
                    <h1 >Run Time:   <span className="text-red-700">{movieDetails?.runtime} mins</span></h1>
                    <h1>Release Date:   <span className="text-red-700">{movieDetails?.release_date}</span></h1>
                    <h1>Status:   <span className="text-red-700">{movieDetails?.status}</span></h1>
                    <h1>Tag Line:   <span className="text-red-700">{movieDetails?.tagline}</span></h1>
                    <h1>Rating:   <span className="text-red-700">{movieDetails?.vote_average} ⭐</span></h1>
                    <h1>Budget:   <span className="text-red-700">{movieDetails?.budget}</span></h1>
                </div>
            </div>
            <div className="w-10/12 mx-auto pt-6">
                <hr/>
            </div>
        </div>
    )
}

export default MovieDetailText;