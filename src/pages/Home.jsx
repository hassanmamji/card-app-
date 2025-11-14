import React from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  const { cart, removeFromCart } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Home Page</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>🛒 Cart Items</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ccc",
                padding: "5px 0",
                marginBottom: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span>{item.name} - Rs {item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
