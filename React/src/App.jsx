import React, { useState } from "react";
import AddProductForm from "./components/add-product-form";
import FilteringButtons from "./components/filtering-buttons";
import ProductTable from "./components/product-table";
import "./index.css";

const productsData = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Phone", price: 500, category: "Electronics" },
];

function App() {
  const [products, setProducts] = useState(productsData);
  const [category, setCategory] = useState("All");

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const filterByCategory = (category) => {
    return category === "All"
      ? products
      : products.filter((product) => product.category === category);
  };

  const filteredProducts = filterByCategory(category);

  return (
    <div className="container">
      <h1>Product List</h1>
      <FilteringButtons setCategory={setCategory} />
      <AddProductForm addProduct={addProduct} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default App;
