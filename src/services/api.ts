import axios from 'axios';
import { Post, CreatePostData } from '../types/post';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  async getPosts(start: number = 0, limit: number = 10): Promise<Post[]> {
    const response = await axios.get(`${BASE_URL}/posts`, {
      params: { _start: start, _limit: limit }
    });
    return response.data;
  },

  async getPost(id: number): Promise<Post> {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  },

  async createPost(data: CreatePostData): Promise<Post> {
    const response = await axios.post(`${BASE_URL}/posts`, {
      ...data,
      userId: 1 // Default userId for demo purposes
    });
    return response.data;
  }
};