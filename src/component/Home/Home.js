import React from 'react';

const Home = () => {

    return (
      <div>
        <section>
          <div className="w-full relative pb-10 px-6 xl:px-0">
            <img
              className="absolute w-full inset-0 h-full object-cover object-center"
              src="https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=2000"
              alt="we care family"
            />

            <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
              <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                <img
                  tabIndex="0"
                  role="img"
                  aria-label="people smiling"
                  className="mx-auto"
                  src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"
                  alt=""
                />
              </div>
              <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                <p
                  tabIndex="0"
                  className="text-indigo-700 uppercase text-2xl mb-4"
                >
                  Qusique Tincidun sapien
                </p>
                <h1
                  tabIndex="0"
                  className="text-indigo-700 text-4xl lg:text-6xl uppercase font-black mb-8"
                >
                  IT THE FUTURE
                </h1>
                <p tabIndex="0" className="text-gray-800 font-regular mb-8">
                  COMBINING SCIENCE WITH BEAUTY. L'Oreal Paris offerincare
                  products is developed and rigorously tested with leading
                  scientists. Indulge yourself in a luxurious and sensorial
                  skincare experience. Cutting-edge innovations, proven by
                  Science.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Home;