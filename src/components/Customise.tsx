import React from 'react'

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
          <img 
                src="/vector3.jpg" // Adjust the path to your diagram image
                alt="Background Diagram"
                className="w-[600px] h-auto object-cover opacity-100" // Adjust size and opacity
              />
            </span>
          </span>
      </h1>
      <p className="text-black mb-6">
      Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
      </p>
      <button type='submit' className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
        Let's Go <span>&rarr;</span>
      </button>
    </div>

    {/* Right Image */}
    <div className="flex-shrink-0">
      <img 
        src="/block.png"  // Adjust the path to your image file in the public folder
        alt="Hero Image"
        className="w-[590px] h-auto object-cover"  // Adjust the size as needed
      />
    </div>
  </div>
  )
}

export default Project

