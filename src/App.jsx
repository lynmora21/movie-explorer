import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchMovies(searchTerm) {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    setLoading(true);
    setError("");
    setSelectedMovie(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );

      const data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      setMovies(data.Search || []);
    } catch (error) {
      setError(error.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  async function getMovieDetails(imdbID) {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`
    );

    const data = await response.json();

    setSelectedMovie(data);
  }

  function showMovieList() {
    setSelectedMovie(null);
  }

  return (
    <div>
      <Header />

      {!selectedMovie && (
        <>
          <SearchBar onSearch={searchMovies} />

          {loading && <p>Searching for movies...</p>}

          {error && <p>{error}</p>}

          {!loading && !error && (
            <MovieList
              movies={movies}
              onSelectMovie={getMovieDetails}
            />
          )}
        </>
      )}

      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onBack={showMovieList}
        />
      )}
    </div>
  );
}

export default App;