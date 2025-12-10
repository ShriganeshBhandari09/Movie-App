import React from "react";
import logo from "../assets/logo.png";
import backgroundImg from "../assets/BG.png";
import movieOne from "../assets/movie-one.png";
import movieTwo from "../assets/movie-two.png";
import movieThree from "../assets/movie-three.png";
import { apiKey, apiUrl } from "../config";
import { Search } from "lucide-react";

const Hero = ({ movies }) => {
  return (
    <section
      className="w-full shadow-[0px_0px_90px_0px_#000000;]"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="m-auto flex justify-center items-center py-6 px-4 flex-col gap-14">
        <img src={logo} alt="logo" className="w-16" />

        <div className="flex justify-center items-center relative">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies[0]?.poster_path}`}
            alt=""
            className="rounded-2xl h-80 absolute right-44 -rotate-12 top-5 shadow-[0px_0px_90px_0px_#000000]"
          />
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies[1]?.poster_path}`}
            alt=""
            className="rounded-2xl h-80 z-10 shadow-[0px_0px_90px_0px_#000000]"
          />
          <img
            src={`https://image.tmdb.org/t/p/w400/${movies[2]?.poster_path}`}
            alt=""
            className="rounded-2xl h-80 absolute left-44 rotate-12 top-5 shadow-[0px_0px_90px_0px_#000000]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold text-white max-w-2xl text-center leading-14 font-DM-Sans">
            Find{" "}
            <span className="bg-gradient-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">
              Movies
            </span>{" "}
            You’ll Love Without the Hassle
          </h1>

          <div className="bg-[#0F0D23] max-w-md w-full m-auto rounded-[8px] flex justify-center items-center gap-1 px-2">
            <Search className="text-white" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search through 300+ movies online"
              className="text-white p-2 font-DM-Sans w-full outline-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
