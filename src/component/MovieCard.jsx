const MovieCard = ({ movie }) => {
  return (
    <>
      {movie.poster_path && (
        <div className="bg-black p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <div className="rounded-xl overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-4 pl-1">
            <p className=" text-white text-lg font-semibold line-clamp-1">
              {movie.title}
            </p>
            <p className="text-yellow-400 font-medium">
              ⭐ Rating: {movie.vote_average}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
