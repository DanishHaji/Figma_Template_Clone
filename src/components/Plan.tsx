import React from 'react';

const Plan = () => {
  return (
    <div>
      {/* Title Section */}
      <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-20 py-12'>
        <div className='relative text-center'>
          <h1 className='text-6xl font-bold text-gray-900 mb-4'>
            Choose&nbsp;
            <span className='relative inline-block'>
              Your&nbsp;Plan
              <span className='absolute -bottom-5 left-0 -z-10'>
                <img 
                  src="/vector3.jpg" // Adjust the path as needed
                  alt="Background Diagram"
                  className="w-[700px] h-auto object-cover opacity-100" 
                />
              </span>
            </span>
          </h1>
          <p className="text-black mb-6 max-w-xl mx-auto">
            Customize the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex justify-center w-full px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Free Plan Card */}
          <div className="bg-white p-6 rounded-lg border border-yellow-400 shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <p className="text-left text-3xl font-bold mb-4">$0</p>
            <p className="mb-4">Get started with basic features for individual use. Perfect for trying out the app.</p>
            <ul className="mb-4 space-y-2">
              <li className="flex items-center justify-center"><span className="mr-2">✓</span>Basic support</li>
              <li className="flex items-center justify-center"><span className="mr-2">✓</span>5 projects</li>
              <li className="flex items-center justify-center"><span className="mr-2">✓</span>Community access</li>
            </ul>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Select Plan</button>
          </div>

          {/* Personal Plan Card */}
          <div className="bg-white p-6 rounded-lg border border-yellow-400 shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-2">Personal</h2>
            <p className="text-left text-3xl font-bold mb-4">$11.99</p>
            <p className="mb-4">For individuals needing more features. Get all the essentials to boost productivity.</p>
            <ul className="mb-4 space-y-2">
              <li className="flex items-center justify-center"><span className="mr-2">✓</span>Priority support</li>
              <li className="flex items-center justify-center"><span className="mr-2">✓</span>Unlimited projects</li>
              <li className="flex items-center justify-center"><span className="mr-2">✓</span>Access to new features</li>
            </ul>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Select Plan</button>
          </div>

          {/* Organization Plan Card */}
          <div className="bg-white p-6 rounded-lg border border-yellow-400 shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-2">Organization</h2>
            <p className="text-left text-3xl font-bold mb-4">$49.99</p>
            <p className="mb-4">Designed for teams and businesses that need collaboration and advanced features.</p>
            <ul className="mb-4 space-y-2">
              <li className="flex items-center justify-center"><span className="mr-2">✓</span>Team collaboration</li>
              <li className="flex items-center justify-center"><span className="mr-2">✓</span>Advanced integrations</li>
              <li className="flex items-center justify-center"><span className="mr-2">✓</span>Dedicated support</li>
            </ul>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Select Plan</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan;
