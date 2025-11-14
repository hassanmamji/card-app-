import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{product.name}</h3>
      <p>💲{product.price}</p>

      <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
        <Link
          to={`/product/${product.id}`}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          View Details
        </Link>

        <button
          onClick={() => addToCart(product)}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;


