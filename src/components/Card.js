import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ id, nombre, precio, demografia, img }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="item-card">
      <div className="item-title">{nombre}</div>
      <div className="item-title">${precio}</div>
      <img className="item-card-img" src={img} height={200} />
      </div>
      
    </Link>
  );
};

