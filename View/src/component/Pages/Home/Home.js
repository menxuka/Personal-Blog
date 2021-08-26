import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../../Header/Header';
import AllPost from '../../AllPost/AllPost';
import Sidebar from '../../Sidebar/Sidebar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts')
            // console.log(res)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])
    return (
        <>
            <Header />
            <div className="home flex">
                <AllPost posts={posts} />
                <Sidebar />
            </div>
        </>
    );
};

export default Home;