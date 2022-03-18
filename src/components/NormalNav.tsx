import React from "react";
import { Link } from "react-router-dom";

const NormalNav: React.FC = () => {
  return (
    <nav>
      <div>logo</div>
      <ul>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/subcategories">Subcategories</Link>
        </li>
      </ul>
      <button>Logout</button>
    </nav>
  );
};

export default NormalNav;
