import "./App.css";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListContainer from "./components/ListContainer";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListContainer />}>
            {" "}
          </Route>
          <Route path="/cart" element={<Cart />}>
            {" "}
          </Route>
          <Route path="/detail/:id" element={<ItemDetail />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
