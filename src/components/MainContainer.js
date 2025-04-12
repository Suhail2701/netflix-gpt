import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[0];
    const { id, overview, title } = mainMovie;
    return (
        <div className="">
            <VedioTitle title={title} overview={overview} />
            <VedioBackground id={id}/>
        </div>
    );
}

export default MainContainer;