import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/post/${post.id}`)}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
        {post.title}
      </h2>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {post.body}
      </p>
      <div className="flex items-center text-blue-600 hover:text-blue-700">
        <span className="mr-2">Read more</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}