import React, { useContext } from "react";
import { userContext } from "./ShoppingCart";

function Product() {
  const { cart, addItem, deleteItem } = useContext(userContext);
  const products = [
    {
      id: 1,
      name: "Samsung",
      quantity: 1,
      price: 20000,
    },
    {
      id: 2,
      name: "Nokia",
      quantity: 1,
      price: 10000,
    },
    {
      id: 3,
      name: "Apple",
      quantity: 1,
      price: 50000,
    },
  ];
  return (
    <>
      <h2>Product List</h2>
      <table style={{ border: "5px solid" }}>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {products.map((item, index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button
                onClick={() => {
                  addItem(item);
                }}
              >
                Add
              </button>
            </td>
          </tr>
        ))}
      </table>
      <h1>Cart</h1>
      <table style={{ border: "5px solid" }}>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {cart.map((item, index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
      <p>
        Total:{" "}
        {cart === null ? 0 : cart.reduce((acc, item) => acc + item.price, 0)}
      </p>
    </>
  );
}
export default Product;
