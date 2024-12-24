import React from 'react';
import Image from 'next/image';

const Work = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      {/* Main Heading with Stroke Image */}
      <h1 className="text-5xl md:text-5xl font-bold text-center mb-4 relative z-10">
        Your Work,&nbsp;
        <span className="relative inline-block">
          Everywhere&nbsp;
          <span className="relative inline-block">
            you are
            {/* Positioned Stroke Image */}
            <span className="absolute -bottom-3 left-3 z-0">
              <Image 
                src="/blue.png" // Adjust the path to your stroke image
                alt="Stroke Decoration"
                className="w-[700px] h-auto opacity-80" // Increase the width as needed
              />
            </span>
          </span>
        </span>
      </h1>

      {/* Centered Paragraph */}
      <p className="md:text-lg text-center max-w-xl mx-auto mb-8 text-lg">
        Access your work from anywhere and keep everything in sync across all your devices. Explore seamless productivity on the go.
      </p>

      {/* Button */}
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md flex items-center gap-2 text-lg font-semibold hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
        Try Task <span>&rarr;</span>
      </button>
    </div>
  );
};

export default Work;
