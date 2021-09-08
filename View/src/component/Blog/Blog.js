import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { Context } from '../../context/Context';
import axios from 'axios';

const Blog = ({ blog, path }) => {
    const PF = 'http://localhost:5000/img/';
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    // console.log(path)
    // window.onload = function useEffect() {
    //     setTitle(blog.title);
    //     setDesc(blog.desc);
    // }

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${blog._id}`, { data: { username: user.username } });
            window.location.replace("/");
        } catch (err) {

        }
    }
    // console.log(blog);

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${blog._id}`, {
                username: user.username,
                title,
                desc
            });
            setUpdateMode(false);
        } catch (err) {

        }
    }

    return (
        <div className="blog">
            <div className="p-5 pr-0 flex flex-col">
                {blog.photo && (<img src={PF + blog.photo} alt="" className="w-full h-72 rounded-md object-cover" />)}

                {
                    updateMode
                        ? <input type="text" value={title} className="blogTitle m-2.5 text-center text-3xl font-bold flex" autoFocus onChange={(e) => setTitle(e.target.value)} />
                        : <h1 className="blogTitle m-2.5 text-center text-3xl font-bold">{blog.title}
                            {blog.username === user?.username && <div className="float-right text-base">
                                <i class="blogIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                <i class="blogIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                            }
                        </h1>
                }



                <div className="blogInformation mb-4 flex justify-between text-base">
                    <span className="blogAuthor">Author:

                        <b>{blog.username}</b>

                    </span>
                    <span className="blogDate">{
                        new Date(blog.createdAt).toDateString()}</span>
                </div>

                {
                    updateMode
                        ? <textarea value={desc} className="blogDescription text-lg" onChange={(e) => setDesc(e.target.value)}></textarea>
                        : <p className="blogDescription text-lg">{blog.desc}</p>
                }
                {updateMode && <button className="blogUpdateButton w-32 border-none p-1 rounded-lg cursor-pointer mt-5" onClick={handleUpdate}>Update</button>}
            </div>
        </div >
    );
};

export default Blog;