import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState("");

  // Fetch all departments (once)
  useEffect(() => {
    fetch("http://localhost:5000/departments")
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .catch((err) => console.error("Error loading departments", err));
  }, []);

  // Fetch products when selectedDept changes
  useEffect(() => {
    const url = selectedDept
      ? `http://localhost:5000/products?department=${encodeURIComponent(
          selectedDept
        )}`
      : "http://localhost:5000/products";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products", err));
  }, [selectedDept]);

  return (
    <div>
      <h2>Products</h2>

      <label htmlFor="department-select">Filter by Department: </label>
      <select
        id="department-select"
        value={selectedDept}
        onChange={(e) => setSelectedDept(e.target.value)}
      >
        <option value="">All Departments</option>
        {departments.map((dept) => (
          <option key={dept.id} value={dept.name}>
            {dept.name}
          </option>
        ))}
      </select>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> — ${p.price} — {p.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
