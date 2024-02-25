// InstagramHome.js
import React from 'react';

const InstagramHome = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg w-full">
        <header className="py-4 px-6 border-b border-gray-300 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/instagram-logo.png"
              alt="Instagram Logo"
              className="h-8 mr-4"
            />
            <span className="text-xl font-semibold">Instagram</span>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-sm py-1 px-2 mr-4 focus:outline-none"
            />
            <button className="text-blue-500 font-semibold">Login</button>
          </div>
        </header>
        <main>
          {/* Dummy posts */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded overflow-hidden"
              >
                <img
                  src={`https://picsum.photos/200/200?random=${index}`}
                  alt={`Post ${index}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2">
                  <span className="block text-sm text-gray-600 mb-1">
                    Username
                  </span>
                  <p className="text-sm">Caption goes here</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default InstagramHome;
