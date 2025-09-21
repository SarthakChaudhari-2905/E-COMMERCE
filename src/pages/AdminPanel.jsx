import { useState, useEffect } from "react";
import "./AdminPanel.css";

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", description: "", category: "", image: "" });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  // Fetch products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add or Update Product
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      // Update existing product
      await fetch(`http://localhost:5000/api/products/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      setEditId(null);
    } else {
      // Add new product
      await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
    }

    setForm({ name: "", price: "", description: "", category: "", image: "" });
    fetchProducts();
  };

  // Delete Product
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchProducts();
  };

  // Edit Product → fills the form
  const editProduct = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    });
    setEditId(product._id);
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Panel</h2>

      {/* Add/Update Form */}
      <form onSubmit={handleSubmit} className="admin-form">
        <input className="admin-input" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="admin-input" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input className="admin-input" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input className="admin-input" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <input className="admin-input" placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />

        <button className="admin-btn submit-btn">{editId ? "Update Product" : "Add Product"}</button>
      </form>

      {/* Product List */}
      <h3 className="admin-subtitle">Products</h3>
      <ul className="product-list">
        {products.map((p) => (
          <li key={p._id} className="product-item">
            <span>
              <strong>{p.name}</strong> - ₹{p.price}
            </span>
            <div className="btn-group">
              <button className="admin-btn edit-btn" onClick={() => editProduct(p)}>Edit</button>
              <button className="admin-btn delete-btn" onClick={() => deleteProduct(p._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
