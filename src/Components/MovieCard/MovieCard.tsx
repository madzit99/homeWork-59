import React, { useState } from "react";
import { Movie } from "../../types";

interface Props {
  movie: Movie;
  onEdit: (id: number, name: string) => void;
  onDelete: (id: number) => void;
}

const MovieCard: React.FC<Props> = ({ movie, onEdit, onDelete }) => {
  const [movieName, setMovieName] = useState<string>(movie.name);

  const handleEdit = () => {
    onEdit(movie.id, movieName);
  };

  const handleDelete = () => {
    onDelete(movie.id);
  };
  return (
    <div className="input-container d-flex align-items-center gap-3 mb-3">
      <input
        type="text"
        className="form-control"
        name="movieInput"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        onBlur={handleEdit}
      />
      <button className="btn btn-close" onClick={handleDelete}></button>
    </div>
  );
};

export default MovieCard;
