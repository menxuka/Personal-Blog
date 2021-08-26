import React, { useContext, useState } from 'react';
import './WriteBlogs.css';
import axios from 'axios';
import { Context } from '../../../context/Context';

const WriteBlogs = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename)
      data.append('file', file)
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {

      }
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('post/' + res.data._id)
    } catch (err) {

    }
  }
  return (
    <div className="writeBlogs pt-14">
      {file && <img src={URL.createObjectURL(file)} alt="" className="writeImage ml-40 h-30 object-cover rounded-lg" />}
      <form action="" className="writeBlogsForm relative" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="flex items-center justify-center w-6 h-6 rounded-full border-2 border-solid text-base text-gray-500 cursor-pointer fas fa-plus"></i>
          </label>
          <input type="file" id='fileInput' className="hidden" onChange={e => setFile(e.target.files[0])} />
          <input type="text" placeholder="Title" className='writeInput' autofocus={true} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText text-xl h-screen" onChange={e => setDesc(e.target.value)}></textarea>
        </div>
        <button className="writeSubmit absolute top-5 right-12 text-white p-2.5 rounded-lg border-none cursor-pointer text-base" type="submit">Publish</button>
      </form>
    </div>
  );
};

export default WriteBlogs;