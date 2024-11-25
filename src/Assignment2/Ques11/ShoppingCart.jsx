// Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.

import React, { createContext, useState } from "react";
import Product from "./Product";

export const userContext = createContext();

export function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([
      ...cart,
      {
        id: new Date().getTime(),
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      },
    ]);
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <>
      <userContext.Provider value={{ cart, addItem, deleteItem }}>
        <Product />
      </userContext.Provider>
    </>
  );
}
export default ShoppingCart;
