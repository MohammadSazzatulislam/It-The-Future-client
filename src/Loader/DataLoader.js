import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const DataLoader = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://it-the-future.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return products;
};

export default DataLoader;
