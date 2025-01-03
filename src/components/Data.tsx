import React from 'react';
import Image from 'next/image';

const Data = () => {
  return (
    <div className=" relative flex items-center justify-between px-20 py-16 bg-white">
    {/* Left Content */}
    <div className="max-w-lg relative z-10">
      <h1 className="text-6xl font-bold  text-gray-900 mb-4">
        100%&nbsp;
        <span className='relative inline-block'>
          your data
          <span className='absolute -bottom-4 left-0 -z-10'>
          <Image 
                src="/vector.png" 
                alt="Background Diagram"
                className="w-[400px] h-auto object-cover opacity-150" 
              />
            </span>
          </span>
      </h1>
      <p className="text-black mb-6">
      The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
        Read more <span>&rarr;</span>
      </button>
    </div>

    {/* Right Image */}
    <div className="flex-shrink-0">
      <Image 
        src="/half.png" 
        alt="Hero Image"
        className="w-[590px] h-auto object-cover" 
      />
    </div>
  </div>
  )
}

export default Data
