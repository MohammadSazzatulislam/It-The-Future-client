import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const detail = useLoaderData();

  const { name, img, details, about, time, price } = detail;

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
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

          <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
            Chack Out
          </button>
        </div>

        {/* <!-- Preview Images Div For larger Screen--> */}

        <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className=" w-ful lg:w-8/12 bg-gray-100 flex justify-center items-center">
            <img className="h-full" src={img} alt="Wooden Chair Previw" />
          </div>
          <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
            <div className="bg-gray-100 flex justify-center items-center py-4">
              <img
                src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"
                alt="Wooden chair - preview 1"
              />
            </div>
            <div className="bg-gray-100 flex justify-center items-center py-4">
              <img
                src="https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png"
                alt="Wooden chair - preview 2"
              />
            </div>
            <div className="bg-gray-100 flex justify-center items-center py-4">
              <img
                src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"
                alt="Wooden chair- preview 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
