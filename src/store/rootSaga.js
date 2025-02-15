import { all } from "redux-saga/effects";
import fetchMoviesSaga from "./movies/movieSaga";

export default function* rootSaga() {
  yield all([fetchMoviesSaga()]);
}
