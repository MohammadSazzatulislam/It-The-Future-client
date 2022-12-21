import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="lg:max-w-full relative inset-0 md:max-w-full w-full mx-auto">
        <div className="relative mx-auto banner-img ">
          <img
            alt=""
            src="https://www.nrhosting.com/wp-content/uploads/2021/01/Information-Technology-868x490.jpg"
            className="w-full object-cover h-screen lg:block md:hidden hidden"
          />
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0" />
          <img
            alt=""
            src="https://www.nrhosting.com/wp-content/uploads/2021/01/Information-Technology-868x490.jpg"
            className="lg:hidden  w-full h-screen md:block hidden"
          />
          <img
            alt=""
            src="https://www.nrhosting.com/wp-content/uploads/2021/01/Information-Technology-868x490.jpg"
            className="lg:hidden  w-full h-screen md:hidden block"
          />
          <div className="absolute lg:top-52 mx-auto lg:right-[390px] md:top-52 md:right-48  top-52 p-3 ">
            <div className=" flex justify-center items-center flex-col ">
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold leading-9 text-white">
                <Typewriter
                  options={{
                    strings: [
                      "Artificial Intelligence to",
                      "write engaging and plagiarism-",
                      "free articles in seconds",
                      "Generate content for your ",
                      "website that will boost ",
                      "your SEO on autopilot!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
               
              </h1>
              <div className="mt-4">
                <p className="text-md leading-7 text-center text-white">
                  We Innovate and Integrate Thousands Of Products Using Advanced
                  Technology.
                </p>
              </div>
              <div className="mt-8 flex justify-center items-center w-full">
                <button className="hover:bg-blue-600 flex justify-center bg-blue-500 sm:w-32 w-full h-10 py-3">
                  <p className="text-base font-medium leading-none text-white">
                    Explore
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
