import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchMovieDetailsRequest } from "../store/movies/movieActions";
import { Star, TrendingUp } from "lucide-react";

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetailsRequest(id));
  }, [dispatch, id]);

  const { movieDetails, movieVideos } = useSelector((state) => state.movies);

  // const youtubeVideo = movieVideos?.find((video) => video.type === "Trailer");

  console.log(movieVideos);

  const titles = [
    "Generes",
    "Overview",
    "Release date",
    "Countries",
    "Status",
    "Language",
    "Budget",
    "Revenue",
    "Tagline",
    "Production Companies",
  ];

  return (
    <>
      <div className="px-3 sm:px-[5vw] lg:px-[9vw] py-10 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 flex-col">
            <h1 className="text-white text-4xl font-bold font-DM-Sans">
              {movieDetails?.title}
            </h1>
            <p className="text-[#A8B5DB] font-DM-Sans text-lg ">
              {movieDetails?.release_date}
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-[#221F3D] px-4 py-2 flex gap-2 items-center rounded-lg flex-shrink-0">
              <Star className="inline w-4 h-4 fill-[#FFCD1A] stroke-[#FFCD1A]" />
              <p className="text-white font-DM-Sans text-lg font-semibold">
                {movieDetails?.vote_average?.toFixed(1)}
                <span className="font-normal text-[#A8B5DB] ">
                  /10 ({movieDetails?.vote_count})
                </span>
              </p>
            </div>
            <div className="bg-[#221F3D] px-4 py-2 flex gap-2 items-center rounded-lg flex-shrink-0">
              <TrendingUp className="inline w-4 h-4 stroke-[#A8B5DB]" />
              <p className="text-[#A8B5DB] font-DM-Sans text-lg font-semibold">
                {movieDetails?.popularity?.toFixed(0)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-1/4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
              alt=""
              className="rounded-lg h-[450px]"
            />
          </div>
          <div className="w-3/4">
            <iframe
              className="w-full h-[450px] rounded-md"
              src={`https://www.youtube.com/embed/${movieVideos[0]?.key}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="font-DM-Sans flex gap-5 flex-col">
          <div className="grid grid-display-columns">
            <h3 className="text-[#A8B5DB] text-lg ">Genre</h3>
            <div className="flex gap-3 items-center">
              {movieDetails.genres?.map((genre) => (
                <div className="py-2 px-4 bg-[#221F3D] rounded-md">
                  <p className="font-DM-Sans font-semibold text-white">
                    {genre.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-display-columns">
            <h3 className="text-[#A8B5DB] text-lg ">Overview</h3>

            <p className="font-DM-Sans font-regular text-white leading-[175%]">
              {movieDetails.overview}
            </p>
          </div>

          <div className="grid grid-display-columns">
            <h3 className="text-[#A8B5DB] text-lg ">Release date</h3>

            <p className="font-DM-Sans font-regular text-white leading-[175%]">
              {movieDetails.release_date}
            </p>
          </div>

          <div className="grid grid-display-columns">
            <h3 className="text-[#A8B5DB] text-lg ">Status</h3>

            <p className="font-DM-Sans font-regular text-white leading-[175%]">
              {movieDetails.status}
            </p>
          </div>

          <div className="grid grid-display-columns">
            <h3 className="text-[#A8B5DB] text-lg ">Language</h3>

            <ul className="font-DM-Sans font-regular text-white leading-[175%] flex gap-8 list-disc">
              {movieDetails?.spoken_languages?.map((language) => (
                <li>{language.english_name}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-display-columns">
            <h3 className="text-[#A8B5DB] text-lg ">Budget</h3>

            <p className="font-DM-Sans font-regular text-white leading-[175%]">
              {movieDetails.budget}
            </p>
          </div>

          <div className="grid grid-display-columns">
            <h3 className="text-[#A8B5DB] text-lg ">Revenue</h3>

            <p className="font-DM-Sans font-regular text-white leading-[175%]">
              {movieDetails.revenue}
            </p>
          </div>

          {movieDetails?.tagline != "" && (
            <div className="grid grid-display-columns">
              <h3 className="text-[#A8B5DB] text-lg ">Tagline</h3>

              <p className="font-DM-Sans font-regular text-white leading-[175%]">
                {movieDetails.tagline}
              </p>
            </div>
          )}

          <div className="grid grid-display-columns">
            <h3 className="text-[#A8B5DB] text-lg ">Production Companies</h3>

            <ul className="font-DM-Sans font-regular text-white leading-[175%] flex gap-8 list-disc">
              {movieDetails?.production_companies?.map(
                (production_companies) => (
                  <li>{production_companies.name}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
