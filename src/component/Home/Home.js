import React from 'react';

const Home = () => {

    return (
      <div className="lg:max-w-full relative inset-0 md:max-w-full w-full mx-auto">
        <div className="relative">
          <img
            alt=""
            src="https://vdc.edu.au/wp-content/uploads/2021/08/210804-Ed-14-Image-2.jpg"
            className="w-full object-cover h-screen lg:block md:hidden hidden"
          />
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0" />
          <img
            alt=""
            src="https://www.nrhosting.com/wp-content/uploads/2021/01/Information-Technology-868x490.jpg"
            className="lg:hidden w-full h-screen md:block hidden"
          />
          <img
            alt=""
            src="https://www.idgcdn.com.au/article/images/740x500/dimg/dreamstime_m_121137480.jpg"
            className="lg:hidden w-full h-screen md:hidden block"
          />
          <div className="absolute lg:top-8 right-0 md:top-3 top-0 lg:px-7 md:px-10 px-4 py-4">
            <p className="lg:text-6xl md:text-4xl text-3xl font-bold leading-9 text-white">
              It The Future
            </p>
          </div>
        </div>
      </div>
    );
};

export default Home;