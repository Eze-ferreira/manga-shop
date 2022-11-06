import React from "react";
import { useCart } from "../context/cartContext";
import Form from "./Form";

const Cart = () => {
  const { products, clearCart, count, total } = useCart();

  return (
    <div>
      <>
        {count <= 0 ? (
          <div>Cargando...</div>
        ) : (
          <div className="cart-container">
            <div>Carrito</div>
            {products.map((p, i) => (
              <li key={i}>
                {p.nombre}: ${p.precio} x{p.quantity} = ${p.precio * p.quantity}
              </li>
            ))}
            <h2>Total: ${total}</h2>
            <button onClick={clearCart}>Limpiar Carrito</button>
            <Form />
          </div>
        )}
      </>
    </div>
  );
};

export default Cart;
