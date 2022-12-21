import React from "react";
import { Link } from "react-router-dom";

const Course = ({ product }) => {
  const { id, name, img, price } = product;

  return (
    <div className="lg:w-80 md:w-80 w-full border drop-shadow-2xl">
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
          <Link
            to={`/details/${id}`}
            className="bg-yellow-400 hover:bg-yellow-500 py-1.5 px-6 rounded-full"
          >
            <div className="text-md font-semibold">Featured</div>
          </Link>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <h2 className="text-indigo-700 text-lg font-semibold">
            Price : {price}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Course;
