import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-20 py-16 bg-white">
    {/* Left Content */}
    <div className="max-w-lg">
      <h1 className="text-6xl font-bold text-blue-500 mb-4">
        Get More Done with Whitepace
      </h1>
      <p className="text-blue-500 mb-6">
        Discover the best solutions to elevate your business with Whitepace&apos;s cutting-edge tools and resources.
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 mt-4 md:mt-0 rounded-md hover:bg-blue-600 transition">
        Try Whitepace free <span>&rarr;</span>
      </button>
    </div>

    {/* Right Image */}
    <div className="flex-shrink-0">
      <Image
        src="/block.png"  // Adjust the path to your image file in the public folder
        alt="Hero Image"
        className="w-[32rem] h-auto object-cover"  // Adjust the size as needed
      />
    </div>
  </div>
  )
}

export default Hero
