// Create a list of items (e.g., products, articles) in your application.
// Implement dynamic routing to display details for each item when clicked.
// Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
// Fetch item details based on the route parameter and display them on the detail page.
// Add a "Go Back" button on the detail page to return to the list.

import React from "react";
import { Link, Outlet } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductsList = () => {
  const products = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];
  return (
    <>
      <div>
        {products.map((item) => {
          return (
            <li>
              <Link to={`/question6/${item}`}>{item}</Link>
            </li>
          );
        })}
      </div>
      <Outlet />
    </>
  );
};
export default ProductsList;
