function MovieCard({ movie, onSelectMovie }) {
  return (
    <div
      className="movie-card"
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      <img
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

      <div className="movie-info">
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;