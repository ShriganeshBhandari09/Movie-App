const initialState = {
  movies: [],
  loading: false,
};

const moviesReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_ALL_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "FETCH_ALL_MOVIES_SUCCESS":
      return { ...state, movies: action.payload, loading: false };
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
    default:
      return state;
  }
};

export default moviesReducer;
