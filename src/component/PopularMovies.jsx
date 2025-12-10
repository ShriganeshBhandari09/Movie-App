import React from "react";
import { Star } from "lucide-react";
import { MoveRight, MoveLeft } from "lucide-react";


const PopularMovies = ({ movies }) => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl text-white font-DM-Sans font-bold">Popular</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 py-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-[#0F0D23] shadow-[0px_12px_32px_0px_#CECEFB05_inset] backdrop:[blur(16px)] py-5 px-4 rounded-2xl flex flex-col gap-3"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              alt=""
              className="rounded-lg"
            />
            <div className="text-white font-DM-Sans flex justify-between flex-col gap-2 ">
              <h4 className="font-bold text-lg leading-6">{movie?.title}</h4>
              <p className="text-lg leading-6 flex items-center gap-2">
                <Star className="inline w-4 h-4 fill-[#FFCD1A] stroke-[#FFCD1A]" />
                {movie?.vote_average?.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center gap-2">
        <button
          className="p-2 border rounded-lg bg-[#0F0D23] shadow-[0px_12px_32px_0px_#CECEFB05_inset] disabled:opacity-50 cursor-pointer"
        >
          <MoveLeft className="text-white" />
        </button>
        <button
          className="p-2 border rounded-lg bg-[#0F0D23] shadow-[0px_12px_32px_0px_#CECEFB05_inset] disabled:opacity-50 cursor-pointer"
        >
          <MoveRight className="text-white" />
        </button>
      </div>
    </>
  );
};

export default PopularMovies;
