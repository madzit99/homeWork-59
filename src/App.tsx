import { useCallback, useState } from "react";
import Form from "./Components/Form/Form";
import { Movie } from "./types";
import MovieCard from "./Components/MovieCard/MovieCard";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (name: string) => {
    const newMovie: Movie = {
      id: Math.random(),
      name: name,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const editMovie = useCallback((id: number, name: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, name: name } : movie
      )
    );
  }, []);

  const deleteMovie = useCallback((id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }, []);

  return (
    <>
      <div className="container w-50">
        <div className="task1">
          <Form onAdd={addMovie} />
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              onEdit={editMovie}
              onDelete={deleteMovie}
            />
          ))}
        </div>
        <div className="task2"></div>
      </div>
    </>
  );
};

export default App;
