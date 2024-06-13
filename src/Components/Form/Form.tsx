const Form = () => {
  return (
    <div>
      <label htmlFor="movieInput" className="form-label">
        Введите фильм
      </label>
      <div className="input-container d-flex gap-3 align-items-center">
        <input type="text" className="form-control my-3" />
        <button className="btn btn-success">Добавить</button>
      </div>
    </div>
  );
};
export default Form;
