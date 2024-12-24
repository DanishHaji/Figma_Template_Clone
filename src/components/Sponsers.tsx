import React from 'react';

const Sponsers = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100">
      {/* Main Heading */}
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <div className="relative text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Our&nbsp;
            <span className="relative inline-block">
              Sponsors
              <span className="absolute -bottom-4 left-2 z-10">
                <img 
                  src="/vector.png" // Adjust the path as needed
                  alt="Background Diagram"
                  className="w-[700px] h-auto object-cover opacity-100" 
                />
              </span>
            </span>
          </h1>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl px-4">
        {/* Image 1 */}
        <div className="group overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/apple.png" // Adjust the path to your image
            alt="Data Image 1"
            className="w-full h-32 object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-xl" // Scale on hover
          />
        </div>

        {/* Image 2 */}
        <div className="group overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/microsoft.png" // Adjust the path to your image
            alt="Data Image 2"
            className="w-full h-32 object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-xl" // Scale on hover
          />
        </div>

        {/* Image 3 */}
        <div className="group overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/slack.png" // Adjust the path to your image
            alt="Data Image 3"
            className="w-full h-32 object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-xl" // Scale on hover
          />
        </div>

        {/* Image 4 */}
        <div className="group overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/google.png" // Adjust the path to your image
            alt="Data Image 4"
            className="w-full h-32 object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-xl" // Scale on hover
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
