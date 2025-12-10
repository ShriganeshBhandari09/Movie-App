const initialState = {
  movies: [],
  loading: false,
  pageNo: 1,
  totalPages: null,
  movieDetails: [],
  movieVideos: [],
};

const moviesReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_ALL_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "FETCH_ALL_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.payload.results,
        loading: false,
        totalPages: action.payload.total_pages,
        pageNo: action.payload.page,
      };
    case "FETCH_TOPRATED_MOVIES_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_TOPRATED_MOVIES_SUCCESS": {
      return { ...state, movies: action.payload, loading: false };
    }
    case "FETCH_UPCOMING_MOVIES_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_UPCOMING_MOVIES_SUCCESS": {
      return { ...state, movies: action.payload, loading: false };
    }
    case "FETCH_SEARCH_MOVIES_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_SEARCH_MOVIES_SUCCESS": {
      return { ...state, movies: action.payload, loading: false };
    }

    case "FETCH_MOVIE_DETAILS_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_MOVIE_DETAILS_SUCCESS": {
      return { ...state, movieDetails: action.payload, loading: false };
    }
    case "FETCH_MOVIE_DETAILS_VIDEO_SUCCESS": {
      return { ...state, movieVideos: action.payload.results, loading: false };
    }
    default:
      return state;
  }
};

export default moviesReducer;
