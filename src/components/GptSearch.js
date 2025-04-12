import GptSearchBar from "./GptSearchBar";
import GptMoviesList from "./GptMoviesList";


const GptSearch = () => {
    return (
        <div 
        className="min-h-screen "
  style={{ backgroundImage: "url('/netflix-background.jpg')" }}
        >
           <GptSearchBar />
           <div className=" w-11/12 lg:w-10/12 mx-auto bg-black bg-opacity-70 rounded-lg ">

           <GptMoviesList/>
           </div>
    
        </div>
    )
}

export default GptSearch;