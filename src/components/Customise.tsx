import React from 'react';
import Image from 'next/image';

const Project = () => {
  return (
    <div className=" relative flex items-center justify-between px-20 py-16 bg-white">
    {/* Left Content */}
    <div className="max-w-lg relative z-10">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">
        Customise it to your&nbsp;
        <span className='relative inline-block'>
          needs
          <span className='absolute -bottom-3 left-0 -z-10'>
          <Image
                src="/vector3.jpg" 
                alt="Background Diagram"
                className="w-[600px] h-auto object-cover opacity-100" 
              />
            </span>
          </span>
      </h1>
      <p className="text-black mb-6">
      Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
      </p>
      <button type='submit' className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
        Let&apos;s Go <span>&rarr;</span>
      </button>
    </div>

    {/* Right Image */}
    <div className="flex-shrink-0">
      <Image 
        src="/block.png" 
        alt="Hero Image"
        className="w-[590px] h-auto object-cover" 
      />
    </div>
  </div>
  )
}

export default Project

