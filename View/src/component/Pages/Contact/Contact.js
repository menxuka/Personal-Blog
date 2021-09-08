import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const Contact = () => {
    return (
        <div className="contact flex items-center justify-between">

            <div className="contactItem p-4">
                <span className="contactTitle text-3xl">Follow Me</span>
                <div className="contactSocial mt-4 w-60 flex items-center justify-center">
                    <i class="contactIcon fab fa-facebook-square"></i>
                    <i class="contactIcon fab fa-twitter-square"></i>
                    <i class="contactIcon fab fa-linkedin"></i>
                    <i class="contactIcon fab fa-instagram-square"></i>
                </div>
            </div>

            <Sidebar />
        </div>
    );
};

export default Contact;