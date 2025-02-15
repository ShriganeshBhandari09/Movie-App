import axios from "axios";
import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { apiKey, apiUrl } from "../../config";

function* fetchaAllMovies(action) {
  try {
    const response = yield call(
      axios.get,
      `${apiUrl}/popular?api_key=${apiKey}&language=en-US&page=${action.payload.pageNo}`
    );
    yield put({
      type: "FETCH_ALL_MOVIES_SUCCESS",
      payload: response.data.results,
    });
  } catch (error) {
    yield put({ type: "FETCH_ALLMOVIES_ERROR", payload: error.message });
  }
}

function* fetchaTopRatedMovies(action) {
  try {
    const response = yield call(
      axios.get,
      `${apiUrl}/top_rated?api_key=${apiKey}&language=en-US&page=${action.payload.pageNo}`
    );
    yield put({
      type: "FETCH_TOPRATED_MOVIES_SUCCESS",
      payload: response.data.results,
    });
  } catch (error) {
    yield put({ type: "FETCH_TOPRATED_MOVIES_ERROR", payload: error.message });
  }
}

function* fetchUpcomingMovies(action) {
  try {
    const response = yield call(
      axios.get,
      `${apiUrl}/upcoming?api_key=${apiKey}&language=en-US&page=${action.payload.pageNo}`
    );
    yield put({
      type: "FETCH_UPCOMING_MOVIES_SUCCESS",
      payload: response.data.results,
    });
  } catch (error) {
    yield put({ type: "FETCH_UPCOMING_MOVIES_ERROR", payload: error.message });
  }
}

function* fetchSearchMovies(action) {
  try {
    const response = yield call(
      axios.get,
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${action.payload.search}&page=${action.payload.pageNo}`
    );

    yield put({
      type: "FETCH_SEARCH_MOVIES_SUCCESS",
      payload: response.data.results,
    });
  } catch (error) {
    yield put({ type: "FETCH_SEARCH_MOVIES_ERROR", payload: error.message });
  }
}

function* watchAllMoviesRequest() {
  yield takeLatest("FETCH_ALL_MOVIES_REQUEST", fetchaAllMovies);
}

function* watchTopRatedMovies() {
  yield takeLatest("FETCH_TOPRATED_MOVIES_REQUEST", fetchaTopRatedMovies);
}

function* watchUpcomingMovies() {
  yield takeLatest("FETCH_UPCOMING_MOVIES_REQUEST", fetchUpcomingMovies);
}

function* watchSearchMovies() {
  yield takeLatest("FETCH_SEARCH_MOVIES_REQUEST", fetchSearchMovies);
}

export default function* fetchMoviesSaga() {
  yield all([
    fork(watchAllMoviesRequest),
    fork(watchTopRatedMovies),
    fork(watchUpcomingMovies),
    fork(watchSearchMovies),
  ]);
}
