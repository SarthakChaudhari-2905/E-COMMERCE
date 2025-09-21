import React, { useContext } from "react";
import "./Header.css";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../pages/Context/CartContext"; // ✅ import context

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { cart } = useContext(CartContext); // ✅ get cart from context

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <h2>SC</h2>
      </div>

      {/* Navigation */}
      <nav className="nav">
       <Link to="/category/men">Men</Link>
        <Link to="/category/ladies">Ladies</Link>
        <Link to="/category/kids">Kids</Link>
        <Link to="/">Home</Link>

        {user && user.role === "admin" && (
          <Link to="/admin" className="admin-link">
            Admin Panel
          </Link>
        )}
      </nav>

      {/* Icons */}
      <div className="icons">
        <Link to="/search">
          <FaSearch className="icon" />
        </Link>

        {!user && (
          <Link to="/login">
            <FaUser className="icon" />
          </Link>
        )}

        {user && (
          <>
            <Link to="/profile">
              <FaUser className="icon" />
            </Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}

        <Link to="/wishlist">
          <FaHeart className="icon" />
        </Link>

        <Link to="/cart" className="cart-icon">
          <FaShoppingBag className="icon" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
