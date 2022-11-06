import React from "react";

const Formulario = () => {
  return (
    <div>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <label>
          Pais:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <label>
          Codigo Postal:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <label>
          Numero telefónico:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Formulario;
