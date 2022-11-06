import { createContext, useContext } from "react";
import { useState, } from "react";

const cartContext = createContext({
  products: [],
  addToCart: () => {},
  clearCart: () => {},
  count: 0,
  total: 0

});

const useCart = () => {
  return useContext(cartContext);
};

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {

    const updatedCart = products;
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    setProducts(updatedCart);
    setCounter(counter + 1);
    setTotal(total + product.precio)

    console.log("Agregado...", updatedCart);
  };

  const clearCart = () => {
    setProducts([]);
    setCounter(0);
    setTotal(0);
  };

  const context = {
    products: products,
    addToCart: addToCart,
    clearCart: clearCart,
    count: counter,
    total: total
  };

  return <cartContext.Provider value={context}>{children}</cartContext.Provider>;
};

export { useCart, CartContextProvider };
