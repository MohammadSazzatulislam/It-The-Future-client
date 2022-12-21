import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Loading from "../Loading/Loading";


const Details = () => {
  const detail = useLoaderData();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "product-details",
    
  });

  const { id,  name, img, details, about, time, price, img1, img2, img3 } = detail;


  if (!detail) {
    return <Loading></Loading>
  }

  return (
    <div ref={componentRef}>
      <div
        title="download PDF file"
        className="flex justify-end lg:pr-32 pt-5 md:pr-28 pr-10 "
      >
        <svg
          onClick={handlePrint}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-red-600 cursor-pointer   "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </div>

      <div className="container mx-auto lg:p-5 md:p-5 p-4  ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-5">
          {/* <!-- Description Div --> */}

          <div className="  w-full  lg:w-6/12 items-center">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 ">
              {name}
            </h2>

            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
              {about}
            </p>
            <h2 className="font-bold lg:text-2xl text-xl lg:leading-9 leading-7 text-gray-800 mt-4">
              Course Outline
            </h2>
            <div className=" font-semibold text-md lg:text-lg md:text-md leading-6  mt-4">
              {details.map((detail, _index) => (
                <p key={_index}>{detail}</p>
              ))}
            </div>
            <div className=" font-normal flex justify-between items-center text-base leading-6 mt-7">
              {time.map((t, _index) => (
                <p
                  key={_index}
                  className="bg-gray-200 text-md font-semibold px-2 py-1 rounded-sm "
                >
                  {t}
                </p>
              ))}
            </div>

            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              Price : {price}
            </p>

            <Link to={`/checkout/${id}`}>
              <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
                Get premium access
              </button>
            </Link>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className=" w-full  lg:w-6/12 flex lg:flex-row flex-col lg:gap-5 gap-2">
            <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <img className="h-full" src={img} alt="" />
            </div>
            <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 grid-cols-4 gap-3">
              <div className="bg-gray-100 flex justify-center items-center">
                <img className="h-full" src={img1} alt="" />
              </div>
              <div className="bg-gray-100 flex justify-center items-center">
                <img className="h-full" src={img2} alt="" />
              </div>
              <div className="bg-gray-100 flex justify-center items-center">
                <img className="h-full" src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
