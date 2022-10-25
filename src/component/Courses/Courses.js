import React from 'react';
import LeftSideNav from './LeftSideNav';
import Course from './Course';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const products = useLoaderData()

    return (
      <div className="bg-gray-100 flex gap -5 ">
        <div className="w-80  py-8 lg:inline-block hidden p-5 border-2 border-blue-500">
                <LeftSideNav></LeftSideNav>
        </div>
        <div className="mx-auto container py-8 border-2 border-blue-500">
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