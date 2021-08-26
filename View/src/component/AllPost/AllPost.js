import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './AllPost.css';

const AllPost = (props) => {
  const { posts } = props;
  return <div className="all-post flex flex-wrap m-5">
    {posts.map(post => (
      <BlogPost post={post} />
    ))}
  </div>;
};

export default AllPost;