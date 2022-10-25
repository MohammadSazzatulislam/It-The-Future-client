import React from "react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { AllProductsContext } from "../../Context/ProductsContext";

const LeftSideNav = () => {

  const products = useContext(AllProductsContext) 

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
