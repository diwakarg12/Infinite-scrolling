import MovieCard from "./MovieCard"

const MovieComponent = ({ movieInfo }) => {
    return (
        <div className='wrapper'>
            <div className="container">
                <h1>Lists of Datas</h1>
                <div className="grid grid-three-column">
                    {movieInfo.map((item, id) => (
                        <MovieCard key={id} myData={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieComponent