import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/question6");
  };
  return (
    <>
      <p>{productId}</p>
      <button onClick={handleClick}>Go Back</button>
    </>
  );
};
export default ProductDetail;
