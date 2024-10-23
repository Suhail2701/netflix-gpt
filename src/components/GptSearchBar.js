
const GptSearchBar = () => {
    return (
        <div className="  top-36 absolute w-full text-xl">
            <form className="w-5/12 mx-auto flex justify-center gap-3  px-2 py-3 rounded-lg">
            <input type="text" placeholder="Search movies here..." className="  py-3 px-3 rounded-lg w-10/12" />
            <button className="bg-red-700 text-white p-2 rounded-lg font-semibold w-2/12 hover:bg-red-900">Search</button>
            </form>
            {/* <div className="absolute w-full top-36 flex justify-center  gap-2  mx-auto text-xl">
               
            </div> */}
        </div>
    )
}

export default GptSearchBar;