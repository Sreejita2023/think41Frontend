import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <nav>
        <Link to="/users">View Users</Link> |{" "}
        <Link to="/products">View Products</Link>
      </nav>
    </div>
  );
};

export default App;
