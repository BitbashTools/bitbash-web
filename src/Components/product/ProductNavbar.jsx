import React from "react";
import { Link, useLocation } from "react-router-dom";
import './product.css';

const ProductNavbar = () => {
  const location = useLocation();
  
  return (
    <div className="product-navbar">
      <ul>
      </ul>
    </div>
  );
};

export default ProductNavbar;
