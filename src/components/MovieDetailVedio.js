const MovieDetailVedio = ({ storeTrailer }) => {


    return (
        <div>
            <div className="w-screen ">

                <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/" + storeTrailer?.key + "?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>

            </div>
        </div>
    )
}

export default MovieDetailVedio;