import React from "react";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";

const CheckOut = () => {
  const products = useLoaderData();

  

  const { img, name, price } = products;

    const handleCheckOut = () => {
       toast.success("Congratulations Successfully Checked Out");
  };

  if (!products) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="py-16 px-4 flex justify-center items-center mx-auto container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 ">
              Checkout
            </p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-50 py-7 px-10 w-full   ">
              <div className="flex flex-col justify-start items-start w-full space-y-4">
                <p className="text-xl md:text-2xl leading-normal text-gray-900">
                  {name}
                </p>
                <p className="text-base font-bold leading-none text-gray-800">
                  {price}
                </p>
              </div>
              <div className="mt-6  ">
                <img className=" " src={img} alt="" />
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
