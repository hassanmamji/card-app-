import React from "react";
import { useParams, Link } from "react-router-dom";
import  products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <p style={{ fontSize: "20px" }}>💲{product.price}</p>

      <Link
        to="/"
        style={{
          backgroundColor: "gray",
          color: "white",
          padding: "8px 16px",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Go Back
      </Link>
    </div>
  );
}

export default ProductDetail;
