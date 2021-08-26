import React, { useEffect, useState } from 'react';
import './SingleBlogPost.css';
import Sidebar from '../../Sidebar/Sidebar';
import Blog from '../../Blog/Blog';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SingleBlogPost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data);
        };
        getPost()
    }, [path])
    return (
        <div className="singleBlogPost flex">
            <Blog blog={post} path={path} />
            <Sidebar />
        </div>
    );
};

export default SingleBlogPost;