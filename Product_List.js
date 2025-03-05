import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Product Listing</h2>
      <input type="text" placeholder="Search products..." onChange={(e) => addToCart(e.target.value)} />
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;