import './estilos/estilosCart.css'
import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ id, nombre, precio, demografia, categoria, img }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div>{nombre}</div>
      <img src={img} height={200} />
    </Link>
  );
};
