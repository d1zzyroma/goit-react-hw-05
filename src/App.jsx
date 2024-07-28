import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import css from "./App.module.css";

// Lazy load the components
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MoviesDetailsPage = lazy(() => import("./pages/MoviesDetailsPage/MoviesDetailsPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));

function App() {
  return (
    <>
      <Header />
      <div className={css.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:moviesId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
