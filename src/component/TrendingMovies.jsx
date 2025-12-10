import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const TrendingMovies = ({ movies }) => {
  const moviesRef = useRef(null);

  const leftScroll = () => {
    moviesRef.current.scrollLeft -= 500;
  };

  const rightScroll = () => {
    moviesRef.current.scrollLeft += 500;
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl text-white font-DM-Sans font-bold">Trending</h2>
        <div className="flex gap-2">
          <button
            onClick={leftScroll}
            className="p-2 border rounded-lg bg-[#0F0D23] shadow-[0px_12px_32px_0px_#CECEFB05_inset] disabled:opacity-50 cursor-pointer"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={rightScroll}
            className="p-2 border rounded-lg bg-[#0F0D23] shadow-[0px_12px_32px_0px_#CECEFB05_inset] disabled:opacity-50 cursor-pointer"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
      <div
        className="flex justify-between gap-20 py-5 overflow-x-scroll px-8 scroll-smooth"
        style={{ scrollbarWidth: "none" }}
        ref={moviesRef}
      >
        {movies.map((movie, index) => (
          <Link
            key={index}
            className="relative  flex-shrink-0 cursor-pointer"
            to={`/movie/${movie?.id}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
              alt=""
              className="h-65 rounded-lg"
            />
            <h3
              className="bg-[#CECEFB1A] bg-clip-text text-9xl font-extrabold  absolute top-1/2  transform -translate-x-1/2 font-DM-Sans "
              style={{
                WebkitTextStroke: "2px white",
              }}
            >
              {index + 1}
            </h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TrendingMovies;
