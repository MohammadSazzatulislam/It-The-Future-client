import React from "react";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const CheckOut = () => {
  const products = useLoaderData();

  const { img, name, price } = products;

    const handleCheckOut = () => {
       toast.success("Congratulations Successfully Checked Out");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              Checkout
            </p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
              <div className="flex flex-col justify-start items-start w-full space-y-4">
                <p className="text-xl md:text-2xl leading-normal text-gray-800">
                  {name}
                </p>
                <p className="text-base font-semibold leading-none text-gray-600">
                  {price}
                </p>
              </div>
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
          <button
            onClick={handleCheckOut}
            className="border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 space-x-2 py-4 rounded w-full"
          >
            <p className="text-base leading-4">Check Out</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
