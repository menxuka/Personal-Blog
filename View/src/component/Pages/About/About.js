import React from 'react';

const About = () => {
    return (
        <div className="header mt-14">
            <div className="headerTitles flex flex-col items-center">
                <span className="headerTitleLg absolute text-8xl text-white">About Me</span>
            </div>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="headerImg w-full mt-20 object-cover" />

            <div>
                <p className="headerTitles flex flex-col items-center text-4xl mt-14">Hello. I am Menuka Tasnim. Welcome to my Personal Blog. Here I write about many things. Hope you like it</p>
            </div>
        </div>
    );
};

export default About;