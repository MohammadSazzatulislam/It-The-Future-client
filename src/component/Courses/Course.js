import React from "react";
import { Link } from "react-router-dom";

const Course = ({ product }) => {
  const { id, name, img, price } = product;

  return (
    <div>
      <div className="mx-auto container py-">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          {/* Card  */}
          <div className="mx-2 w-72 lg:mb-0 mb-8">
            <div>
              <img alt="" src={img} className="w-full h-44" />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div className="bg-yellow-400 py-1.5 px-6 rounded-full">
                  <Link
                    to={`/details/${id}`}
                    className="text-md font-semibold text-indigo-700"
                  >
                    Featured
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{name}</h2>

                <div className="flex items-center justify-between py-4">
                  <h2 className="text-indigo-700 text-lg font-semibold">
                    Price :
                  </h2>
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    {price}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Card Ends */}
        </div>
      </div>
    </div>
  );
};

export default Course;
