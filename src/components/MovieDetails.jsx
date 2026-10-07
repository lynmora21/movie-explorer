function MovieDetails({ movie, onBack }) {
  return (
    <div className="movie-details">
      <button className="back-button" onClick={onBack}>
        ← Back to Movies
      </button>

      <div className="movie-details-content">
        <img
          className="movie-details-poster"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "/no-poster.svg"
          }
          alt={`${movie.Title} poster`}
          onError={(event) => {
            event.currentTarget.src = "/no-poster.svg";
          }}
        />

        <div className="movie-details-info">
          <h1>{movie.Title}</h1>

          <p className="movie-rating">
            ⭐ {movie.imdbRating} / 10
          </p>

          <p>
            <strong>Year:</strong> {movie.Year}
          </p>

          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>

          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>

          <p>
            <strong>Director:</strong> {movie.Director}
          </p>

          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>

          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;