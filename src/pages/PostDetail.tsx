import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Post } from '../types/post';
import { api } from '../services/api';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await api.getPost(parseInt(id));
        setPost(data);
      } catch (err) {
        setError('Failed to load post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-600 p-4">{error}</div>;
  if (!post) return <div className="text-center p-4">Post not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Posts
      </button>

      <article className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="prose max-w-none">
          <p className="text-gray-700 whitespace-pre-line">
            {post.body}
          </p>
        </div>
      </article>
    </div>
  );
}