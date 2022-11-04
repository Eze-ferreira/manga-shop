import { createContext, useContext } from "react";
import { useState, } from "react";

const cartContext = createContext({
  products: [],
  addToCart: () => {},
  clearCart: () => {},
  count: 0

});

const useCart = () => {
  return useContext(cartContext);
};

const CartContextProvider = ({ children }) => {
  const [products, setproducts] = useState([]);

  const addToCart = (product) => {
    setproducts((products) => [...products, product]);
  };

  const clearCart = () => {
    setproducts([]);
  };

  const context = {
    products: products,
    addToCart: addToCart,
    clearCart: clearCart,
    count: products.lenght
  };

  return <cartContext.Provider value={context}>{children}</cartContext.Provider>;
};

export { useCart, CartContextProvider };
