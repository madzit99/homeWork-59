import React, { useState } from "react";

interface Props {
  onAdd: (name: string) => void;
}

const Form: React.FC<Props> = ({ onAdd }) => {
  const [movieName, setMovieName] = useState<string>("");

  return (
    <div>
      <label htmlFor="movieInput" className="form-label">
        Введите фильм
      </label>
      <div className="input-container d-flex gap-3 align-items-center">
        <input type="text" className="form-control my-3" />
        <button onClick={() => onAdd(movieName)} className="btn btn-success">Добавить</button>
      </div>
    </div>
  );
};
export default Form;
