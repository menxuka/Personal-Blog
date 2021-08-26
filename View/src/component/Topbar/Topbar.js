import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Topbar.css';

const Topbar = () => {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className="top w-100 h-14 sticky top-0 flex items-center bg-white z-50">
            <div className="left flex items-center justify-center">
                <i class="topIcon fab fa-facebook-square"></i>
                <i class="topIcon fab fa-twitter-square"></i>
                <i class="topIcon fab fa-linkedin"></i>
                <i class="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="center">
                <ul className="flex justify-center m-0 p-0 list-none">
                    <li className="topListItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="topListItem"><Link to="/">About</Link></li>
                    <li className="topListItem"><Link to="/">Contact</Link></li>
                    <li className="topListItem"><Link to="/write">Write</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{user && 'Logout'}</li>
                </ul>
            </div>
            <div className="right flex items-center justify-center">
                {user ? (
                    <Link to='/settings'>
                        <img src={user.profilePicture} alt="" className='w-10 h-10 rounded-full object-cover' />
                    </Link>
                ) : (
                    <Link className="topListItem" to="/login">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Topbar;