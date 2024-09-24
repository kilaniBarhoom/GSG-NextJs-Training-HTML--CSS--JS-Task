function AddProductForm({ addProduct }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const category = event.target.category.value;
    const newProduct = { id, name, price, category };
    addProduct(newProduct);
    event.target.reset();
  };

  return (
    <form id="addProductForm" onSubmit={handleSubmit}>
      <input type="text" name="name" required placeholder="Product Name" />
      <input type="number" name="price" required placeholder="Product Price" />
      <select name="category">
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </select>
      <button id="addProductButton" type="submit">
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;
