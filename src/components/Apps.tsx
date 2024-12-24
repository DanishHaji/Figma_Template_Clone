import React from 'react';

const Apps = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16 bg-[#0A3A6B]">
      {/* Left Image with Hover Effect */}
      <div className="flex-1 max-w-sm lg:max-w-md mb-8 lg:mb-0 flex justify-center lg:justify-start">
        <img 
          src="/3.png"  // Adjust the path to your image file in the public folder
          alt="World Image"
          className="w-full h-auto object-cover rounded-lg transition-transform transform hover:scale-110 hover:brightness-110 duration-300 ease-in-out shadow-lg" // Hover effect added
        />
      </div>

      {/* Right Content */}
      <div className="max-w-lg relative z-10 text-center lg:text-left">
        <h1 className="relative text-4xl lg:text-6xl font-bold text-white mb-8">
          Work with Your Favorite Apps Using&nbsp;
          <span className="relative inline-block">
            whitepace
            {/* Diagram Positioning */}
            <span className="absolute -bottom-5 left-0 -z-10"> {/* Adjust the bottom positioning */}
              <img 
                src="/vector.png" // Adjust the path to your diagram image
                alt="Background Diagram"
                className="w-[600px] h-auto object-cover opacity-50" // Adjust size and opacity
              />
            </span>
          </span>
        </h1>
        <p className="text-white mb-6 text-lg">
        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-md">
          Read more <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Apps;
