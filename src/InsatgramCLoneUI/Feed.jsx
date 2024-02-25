// components/Feed.js
import React from 'react';

const Feed = () => {
  // Dummy data for posts
  const posts = [
    { id: 1, imageUrl: 'https://picsum.photos/300/200?random=1', username: 'user1', caption: 'Post 1' },
    { id: 2, imageUrl: 'https://picsum.photos/300/200?random=2', username: 'user2', caption: 'Post 2' },
    { id: 3, imageUrl: 'https://picsum.photos/300/200?random=3', username: 'user3', caption: 'Post 3' },
  ];

  return (
    <main className="bg-white p-6">
      <div className="grid grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="border border-gray-300 rounded overflow-hidden">
            <img src={post.imageUrl} alt={`Post ${post.id}`} className="w-full h-64 object-cover" />
            <div className="p-4">
              <span className="block text-sm text-gray-600 mb-1">{post.username}</span>
              <p className="text-sm">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Feed;
