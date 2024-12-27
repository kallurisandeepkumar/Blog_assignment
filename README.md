# React Posts Manager

A modern React application for managing posts with create, read, and list functionality.

## Features

- 📋 List posts with pagination
- ✏️ Create new posts
- 🔍 View detailed post information
- 📱 Fully responsive design
- ⚡ Fast and optimized performance

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Axios
- React Hot Toast
- Lucide React Icons

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── LoadingSpinner.tsx
│   └── PostCard.tsx
├── pages/            # Page components
│   ├── CreatePost.tsx
│   ├── PostDetail.tsx
│   └── PostList.tsx
├── services/         # API and service layer
│   └── api.ts
├── types/            # TypeScript interfaces
│   └── post.ts
└── App.tsx          # Main application component
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## API Integration

The application uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) for demo purposes:

- `GET /posts`: Fetch paginated posts
- `GET /posts/{id}`: Fetch single post
- `POST /posts`: Create new post

## Features in Detail

### Post List
- Displays posts in a responsive grid
- Pagination with Next/Previous navigation
- Loading states and error handling

### Create Post
- Form validation
- Character limit for description
- Success/error notifications
- Automatic redirect after creation

### Post Detail
- Detailed view of individual posts
- Back navigation
- Loading and error states
