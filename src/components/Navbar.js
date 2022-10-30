import './estilos/estilosNavbar.css'
import React from "react";
import { Link } from "react-router-dom";
import {useCart} from '../context/cartContext'

const Navbar = () => {
  const { count } = useCart();
  return (
    <div className='nav'>
      <div className="navbar">
      <Link className="anchor" to="/">Home</Link>
      <Link className="anchor" to="/cart">Carrito {count}</Link>
    </div>
    </div>
    
  );
};

export default Navbar;
