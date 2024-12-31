import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{post.date}</div>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.slug}`}
          className="text-pink-500 hover:text-pink-600 font-medium"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;