import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Post } from '../types/post';
import { api } from '../services/api';
import { PostCard } from '../components/PostCard';
import { LoadingSpinner } from '../components/LoadingSpinner';

const POSTS_PER_PAGE = 10;

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await api.getPosts(page * POSTS_PER_PAGE, POSTS_PER_PAGE);
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
        <Link
          to="/create"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <PlusCircle size={20} className="mr-2" />
          New Post
        </Link>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} className="mr-2" />
              Previous
            </button>
            <button
              onClick={() => setPage(p => p + 1)}
              disabled={posts.length < POSTS_PER_PAGE}
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}