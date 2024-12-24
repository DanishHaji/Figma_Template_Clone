import React from 'react';
import Image from 'next/image';

const User = () => {
  const users = [
    {
      id: 1,
      profilePicture: '/user1.png',
      comment: '“If you haven’t tried Whitepace yet, you need to give it a shot for your next event. It’s so easy and intuitive to set up, and if you need any help, their customer service is seriously amazing.”',
      name: 'Jane Doe',
      designation: 'Event Manager',
      company: 'Eventify Inc.',
      rating: 5,
    },
    {
      id: 2,
      profilePicture: '/user2.png',
      comment: '“Whitepace has transformed the way our team collaborates. It has all the tools we need in one place, and it’s super user-friendly.”',
      name: 'John Smith',
      designation: 'Team Lead',
      company: 'CollabWorks',
      rating: 5,
    },
    {
      id: 3,
      profilePicture: '/user3.png',
      comment: '“Using Whitepace has been a game-changer. Our productivity has doubled, and keeping everyone on the same page has never been easier.”',
      name: 'Alice Johnson',
      designation: 'Project Coordinator',
      company: 'NextGen Solutions',
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 bg-gray-100">
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <div className="relative text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            See what our trusted users say
          </h1>
          {/* Image Stroke Under Heading */}
          <Image 
            src="/vector.png"  // Replace with the actual path to your stroke image
            alt="Stroke Underline"
            className="w-400 mx-auto mt-2"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 mt-8 max-w-6xl px-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative flex flex-col items-center lg:items-start bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 border border-transparent hover:border-blue-300"
          >
            <div className="absolute inset-0 bg-blue-50 opacity-0 hover:opacity-30 rounded-lg transition-opacity duration-300"></div>
            
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={user.profilePicture}
                alt={`${user.name}'s profile picture`}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 max-w-full"
              />
              <div>
                <p className="text-gray-700 leading-relaxed mb-2">{user.comment}</p>
                <p className="text-blue-500 text-sm font-medium mt-2">{user.name}</p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start mt-4">
              <div className="flex gap-1 text-yellow-400 mb-2">
                {Array(user.rating)
                  .fill(null)
                  .map((_, starIndex) => (
                    <span key={starIndex} className="transition-transform transform hover:scale-125">&#9733;</span>
                  ))}
              </div>
              <p className="text-gray-500 text-sm">
                {user.designation} at <span className="font-semibold">{user.company}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
