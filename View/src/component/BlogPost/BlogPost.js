import React from 'react';
import './BlogPost.css'
import { Link } from 'react-router-dom';

const BlogPost = ({ post }) => {
    const PF = 'http://localhost:5000/img/'
    return (
        <div className="w-96 mx-6 mt-1 mb-10">
            {post.photo && <img src={PF + post.photo} alt="" className="w-full h-72 object-cover rounded-lg" />}
            <div className="flex flex-col items-center">
                <div className="postCategories text-sm mt-3">
                    {post.categories.map(category => (
                        <span className="postCategory">{category.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`}>
                    <span className="postTitle text-2xl mt-3 cursor-pointer font-bold">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="postDate text-sm italic mt-4">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDescription text-base overflow-hidden overflow-ellipsis">{post.desc}</p>
        </div>
    );
};

export default BlogPost;