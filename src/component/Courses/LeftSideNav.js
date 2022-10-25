import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://it-the-future.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-col items-start gap-3">
      <h1 className="text-xl font-bold ">Categories</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/details/${product.id}`}>
            <li>{product.name}</li>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
