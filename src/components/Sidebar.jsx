import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Categories</h2>
      <ul>
        <li><Link to="/category/men">👔 Men</Link></li>
        <li><Link to="/category/women">👗 Women</Link></li>
        <li><Link to="/category/kids">🧒 Kids</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
