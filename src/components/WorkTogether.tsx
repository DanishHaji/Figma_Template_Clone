import React from 'react';

const WorkTogether = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-20 py-16 bg-white">
      {/* Left Image */}
      <div className="flex-shrink-0">
        <img 
          src="/world.png" 
          alt="A representation of a global team"
          className="w-[590px] h-auto object-cover" 
        />
      </div>

      {/* Right Content */}
      <div className="max-w-lg relative z-10 mt-8 lg:mt-0">
        <h1 className="relative text-6xl font-bold text-gray-900 mb-4">
          Work&nbsp;<span className="relative inline-block">
            together
            {/* Diagram Positioning */}
            <span className="absolute -bottom-3 left-0 -z-10">
              <img 
                src="/vector.png" 
                alt="Background Diagram"
                className="w-[600px] h-auto object-cover opacity-100"
              />
            </span>
          </span>
        </h1>
        <p className="text-black mb-6">
          Collaborate with your team effectively and manage tasks seamlessly. Explore the tools that will enhance your teamwork and productivity.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">
          Get Started <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default WorkTogether;
