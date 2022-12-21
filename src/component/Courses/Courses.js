import React, { useContext } from "react";
import LeftSideNav from "./LeftSideNav";
import Course from "./Course";
import { AllProductsContext } from "../../Context/ProductsContext";
import Loading from "../Loading/Loading";

const Courses = () => {
  const products = useContext(AllProductsContext);

  if (!products) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-gray-50 flex  ">
      <div className="w-80  pt-8 bg-white lg:inline-block hidden p-5">
        <LeftSideNav></LeftSideNav>
      </div>
      <div className="mx-auto container py-8 ">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {products.map((product) => (
            <Course key={product.id} product={product}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
