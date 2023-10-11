

function MovieCard({ movie }) {


  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
    </div>
  );
}

export default MovieCard;
