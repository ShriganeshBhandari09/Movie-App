export const fetchAllMoviesRequest = (pageNo) => ({
  type: "FETCH_ALL_MOVIES_REQUEST",
  payload: { pageNo },
});

export const fetchAllMoviesSuccess = () => ({
  type: "FETCH_ALL_MOVIES_SUCCESS",
});

export const fetchAllMoviesError = () => ({
  type: "FETCH_ALL_MOVIES_ERROR",
});

export const fetchTopRatedMoviesRequest = (pageNo) => ({
  type: "FETCH_TOPRATED_MOVIES_REQUEST",
  payload: { pageNo },
});

export const fetchTopRatedMoviesSuccess = () => ({
  type: "FETCH_TOPRATED_MOVIES_SUCCESS",
});

export const fetchTopRatedMoviesError = () => ({
  type: "FETCH_TOPRATED_MOVIES_ERROR",
});

export const fetchUpcomingMoviesRequest = (pageNo) => ({
  type: "FETCH_UPCOMING_MOVIES_REQUEST",
  payload: { pageNo },
});

export const fetchUpcomingMoviesSuccess = () => ({
  type: "FETCH_UPCOMING_MOVIES_SUCCESS",
});

export const fetchUpcomingMoviesError = () => ({
  type: "FETCH_UPCOMING_MOVIES_ERROR",
});

export const fetchSearchMoviesRequest = (search, pageNo) => ({
  type: "FETCH_SEARCH_MOVIES_REQUEST",
  payload: { search, pageNo },
});

export const fetchSearchMoviesSuccess = () => ({
  type: "FETCH_SEARCH_MOVIES_SUCCESS",
});

export const fetchSearchMoviesError = () => ({
  type: "FETCH_SEARCH_MOVIES_ERROR",
});

export const fetchMovieDetailsRequest = (id) => ({
  type: "FETCH_MOVIE_DETAILS_REQUEST",
  payload: { id },
});

export const fetchMovieDetailsSuccess = () => ({
  type: "FETCH_MOVIE_DETAILS_SUCCESS",
});

export const fetchMovieDetailsError = () => ({
  type: "FETCH_MOVIE_DETAILS_ERROR",
});



export const fetchMovieDetailsVideosSuccess = () => ({
  type: "FETCH_MOVIE_DETAILS_VIDEO_SUCCESS",
});

export const fetchMovieDetailsVideosError = () => ({
  type: "FETCH_MOVIE_DETAILS_VIDEO_ERROR",
});

