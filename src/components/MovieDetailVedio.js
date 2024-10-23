import { Link } from "react-router-dom";



const MovieDetailVedio = ({storeTrailer})=>{


    return(
        <div>
            <div className="w-screen ">
            {/* <Link to="/browse"><button className="absolute text-white right-7 top-32 bg-red-700 p-3 rounded-lg font-semibold text-xl hover:bg-red-500">Home</button></Link> */}
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+storeTrailer?.key+"?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
            
            </div>
        </div>
    )
}

export default MovieDetailVedio;