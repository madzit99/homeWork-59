import React, { useState } from "react";
import { Movie } from "../../types";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const [movieName, setMovieName] = useState<string>(movie.name);
  return (
    <div className="input-container d-flex align-items-center gap-3 mb-3">
      <input type="text" className="form-control" name="movieInput" value={movieName} />
      <button className="btn btn-close"></button>
    </div>
  );
};

export default MovieCard;
