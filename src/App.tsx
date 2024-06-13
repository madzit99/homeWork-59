import { useState } from "react";
import Form from "./Components/Form/Form";
import { Movie } from "./types";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  
  const addMovie = (name: string) => {
    const newMovie: Movie = {
      id: Math.random(),
      name: name,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <>
      <div className="container w-50">
        <div className="task1">
          <Form onAdd={addMovie}/>
        </div>
        <div className="task2"></div>
      </div>
    </>
  );
};

export default App;
