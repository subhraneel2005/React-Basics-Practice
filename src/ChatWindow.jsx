// components/ChatWindow.js
import React from 'react';

const ChatWindow = () => {
  return (
    <div className="flex-1 p-4">
      {/* Chat header */}
      <div className="bg-gray-100 p-3 border-b border-gray-300">
        <div className="flex items-center">
          <img
            src="/user1.jpg"
            alt="User 1"
            className="h-10 w-10 rounded-full mr-2"
          />
          <h2 className="font-semibold">User 1</h2>
        </div>
      </div>
      {/* Chat messages */}
      <div className="mt-4">
        {/* Individual messages */}
        <div className="flex items-center mb-2">
          <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
            <p>Hello!</p>
          </div>
        </div>
        {/* Add more message items as needed */}
      </div>
      {/* Chat input field */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ChatWindow;
