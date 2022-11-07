import React from "react";
import { useCart } from "../context/cartContext";
import Form from "./Form";
import "../styles/estilosCart.css"

const Cart = () => {
  const { products, clearCart, count, total } = useCart();

  return (
    <div className="cart-container">
      <>
        {count <= 0 ? (
          <div className="empty-cart-alert" >Su carrito se encuentra Vacío</div>
        ) : (
          <div className="cart-enable-container">
            <div className="item-view">
              <h1>Carrito</h1>
            {products.map((p, i) => (
              <li className="cart-elements" key={i}>
                {p.nombre}: ${p.precio} x{p.quantity} = ${p.precio * p.quantity}
              </li>
            ))}
            <h2>Total: ${total}</h2>
            <button onClick={clearCart}>Limpiar Carrito</button>
            </div>
            <Form />
          </div>
        )}
      </>
    </div>
  );
};

export default Cart;
