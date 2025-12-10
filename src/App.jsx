import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import "./App.css";
// import TopRatedPage from "./pages/TopRatedPage";
// import UpcomingPage from "./pages/UpcomingPage";
// import SearchPage from "./pages/SearchPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
