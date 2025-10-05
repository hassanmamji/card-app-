import React from "react";
import ProductCard from "../components/ProductCard";
import  products  from "../data/products";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>"Accessory Store"</h1>

      <h1>All Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
