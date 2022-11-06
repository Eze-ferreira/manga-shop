import "../styles/estilosNavbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const { count } = useCart();
  return (
    <div className="nav">
      <div className="navbar">
        <Link className="anchor" to="/">
          Home
        </Link>
        <Link className="anchor" to="/deportes">
          Deportes
        </Link>
        <Link className="anchor" to="/seinen">
          Seinen
        </Link>
        <Link className="anchor" to="/shonen">
          Shonen
        </Link>
        <Link className="anchor" to="/cart">
          <div className="cart-widget-container">
            {count > 0 && <span className="cart-counter">{count}</span>}
            <CartWidget />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
