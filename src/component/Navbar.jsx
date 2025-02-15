import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?${search}`);
    }
  };

  return (
    <nav className="flex justify-between items-center bg-gray-700/50 px-3 sm:px-[5vw] lg:px-[9vw] backdrop-blur-2xl py-4  fixed w-full shadow-md">
      <div>
        <Link to="/" className="text-2xl font-bold cursor-pointer text-white">
          Movie App
        </Link>
      </div>
      <div className="flex items-center gap-6 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-white"
          }
        >
          Popular
        </NavLink>
        <NavLink
          to="/top-rated"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-white"
          }
        >
          Top Rated
        </NavLink>
        <NavLink
          to="/upcoming"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-white"
          }
        >
          Upcoming
        </NavLink>
        <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
          <label htmlFor="movie-search" className="sr-only">
            Search movies
          </label>
          <input
            id="movie-search"
            type="search"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-white placeholder-gray-400 focus:text-white"
          />
          <button
            className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-lg hover:bg-yellow-400 cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
