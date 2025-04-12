import MoviesCard from "./MoviesCard";

const MoviesList = ({movies, title})=>{
    return (
        <div className="pl-4 z-40 relative overflow-x-hidden overflow-y-auto"> 
            <h1 className="py-5 font-bold lg:text-2xl 2xl:text-2xl text-white">{title}</h1>
           {movies && <MoviesCard movies={movies}/>}
        </div>
    )
}

export default MoviesList;