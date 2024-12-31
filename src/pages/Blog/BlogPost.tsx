import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blog';
import NotFound from '../NotFound';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <article>
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500 mb-8">{post.date}</div>
        <div className="prose max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;