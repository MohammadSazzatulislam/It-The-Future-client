import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";


const Details = () => {
  const detail = useLoaderData();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "product-details",
    
  });

  const { id,  name, img, details, about, time, price, img1, img2, img3 } = detail;

  return (
    <div ref={componentRef}>
      <div className="flex justify-end  mt-5 pr-40  ">
        <div title="download PDF file">
          <svg
            onClick={handlePrint}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer   "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>
      </div>

      <div className="2xl:container 2xl:mx-auto lg:py-10 lg:px-20 md:py-5 md:px-3 py-2 px-2 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-6">
          {/* <!-- Description Div --> */}

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
              {name}
            </h2>

            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
              {about}
            </p>
            <h2 className="font-bold lg:text-2xl text-xl lg:leading-9 leading-7 text-gray-800 mt-4">
              Course Outline
            </h2>
            <p className=" font-semibold text-md lg:text-lg md:text-md leading-6  mt-4">
              {details.map((detail) => (
                <p>{detail}</p>
              ))}
            </p>
            <p className=" font-normal flex justify-between items-center text-base leading-6 mt-7">
              {time.map((t) => (
                <p className="bg-gray-200 text-md font-semibold px-2 py-1 rounded-sm ">
                  {t}
                </p>
              ))}
            </p>

            <p className=" flex justify-between items-center font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              <span>Price : </span> {price}
            </p>

            <Link to={`/checkout/${id}`}>
              <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
                Get premium access
              </button>
            </Link>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-3 gap-2">
            <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <img className="h-full" src={img} alt="" />
            </div>
            <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-3">
              <div className="bg-gray-100 flex  justify-center items-center">
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
