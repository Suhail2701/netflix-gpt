import MoviesCard from "./MoviesCard";

const MoviesList = ({movies, title})=>{
    console.log("MoviesCard movies", movies);
    return (
        <div className="pl-4 z-40 relative overflow-x-hidden overflow-y-auto"> 
            <h1 className="py-5 font-bold text-2xl text-white">{title}</h1>
           {movies && <MoviesCard movies={movies}/>}
        </div>
    )
}

export default MoviesList;