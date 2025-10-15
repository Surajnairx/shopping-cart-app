import { useState, useContext } from "react";
import { CartContext } from "./store/ShoppingCartContext.jsx";
import CartContextProvider from "./store/ShoppingCartContext.jsx";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
  return (
    <CartContextProvider>
      <Header
      // cart={shoppingCart}
      // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop /*onAddItemToCart={handleAddItemToCart} */ />
    </CartContextProvider>
  );
}

export default App;
