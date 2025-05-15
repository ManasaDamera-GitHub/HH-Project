import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "../styles/Header.css"; // Assuming styles are there or moved inline for this update

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [cartItems] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Company Logo" width={900} height={900} />
          </a>
        </div>

        {/* Navigation - Hidden on small screens */}
        <nav className="main-nav">
          <ul>
            <li>
              <a href="/beauty">Beauty</a>
            </li>
            <li>
              <a href="/wall-panels">Wall Panels</a>
            </li>
            <li>
              <a href="/native">Native</a>
            </li>
          </ul>
        </nav>

        {/* Location Selector */}
        <div className="location-selector">
          <HiOutlineLocationMarker className="location-icon" />
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            aria-label="Select location"
          >
            <option value="Select Location">Select Location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>

        {/* Search Bar */}
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            aria-label="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button" aria-label="Search">
            <FiSearch className="search-icon" />
          </button>
        </form>

        {/* User Actions */}
        <div className="user-actions">
          <a href="/cart" className="cart-icon" aria-label="Cart">
            <FiShoppingCart className="cart-icon-img" />
            {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
          </a>
          <a href="/login" className="login-icon" aria-label="Login">
            <FiUser className="user-icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
