import React, { useContext } from 'react';
import LeftSideNav from './LeftSideNav';
import Course from './Course';
import { AllProductsContext } from '../../Context/ProductsContext';

const Courses = () => {
  const products = useContext(AllProductsContext)

    return (
      <div className="bg-gray-100 flex gap -5 ">
        <div className="w-80  py-8 bg-white lg:inline-block hidden p-5">
                <LeftSideNav></LeftSideNav>
        </div>
        <div className="mx-auto container py-8 ">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            {products.map((product) => (
              <Course key={product.id} product={product}></Course>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Courses;