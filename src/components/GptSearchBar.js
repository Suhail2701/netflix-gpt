import { useRef } from "react";
import client from "../utils/openAi";
import { OPTIONS } from "../utils/constants";
import { addGptResults } from "../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants"


const GptSearchBar = () => {

    const gptSerachText = useRef(null);
    const dispatch = useDispatch();
    const languageChange = useSelector((store) => store.config.lang);

    const handleGptSearchClick = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + gptSerachText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Don, Golmaal, Koi Mil Gaya, Dhool";
        const gptSearchResults = await client.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        const handleGptMovies = async (movie) => {
            const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', OPTIONS);
            const json = await data.json();
            return json?.results;
        }


        const gptMovies = gptSearchResults?.choices[0]?.message?.content.split(",");

        const promiseArray = await Promise.all(gptMovies.map((movie) => handleGptMovies(movie)));

        dispatch(addGptResults({ movieNames: gptMovies, moviesList: promiseArray }))
    }

    return (
        <div className="  top-36  w-full text-xl pt-[7%] md:pt-[20%] lg:pt-[15%] xl:pt-[8%] z-30 pb-7">
            <form className="w-11/12 lg:w-9/12 xl:w-5/12 mx-auto flex justify-center gap-3  px-2 py-3 rounded-lg" onSubmit={(e) => e.preventDefault()}>
                <input ref={gptSerachText} type="text" placeholder={lang[languageChange].gptSearchPlaceholder} className="  py-3 px-3 rounded-lg w-10/12 " />
                <button className="bg-red-700 text-white p-2 rounded-lg text-sm lg:font-semibold w-2/12 hover:bg-red-900" onClick={handleGptSearchClick}>{lang[languageChange].search}</button>
            </form>

        </div>
    )
}

export default GptSearchBar;