import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            // console.log(res);
            setCats(res.data);
        };
        getCats();
    }, [])
    return (
        <div className="sidebar m-5 pb-7 rounded-lg flex flex-col items-center">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <p>Hello. I am Menuka Tasnim. Welcome to my Personal Blog.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList list-none mb-7">
                    {cats.map(cat => (
                        <Link to={`/?category=${cat.name}`}>
                            <li className="sidebarListItem">{cat.name}</li>
                        </Link>

                    ))}

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial mt-4 w-60 flex items-center justify-center">
                    <i class="sidebarIcon fab fa-facebook-square"></i>
                    <i class="sidebarIcon fab fa-twitter-square"></i>
                    <i class="sidebarIcon fab fa-linkedin"></i>
                    <i class="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;