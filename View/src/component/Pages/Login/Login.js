import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { Context } from '../../../context/Context';
import './Login.css';

const Login = () => {
    const userRef = useRef();
    const passRef = useRef();
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        // console.log(e)
        try {
            const res = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passRef.current.value,
            })
            // console.log(res);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE' });
        }

    };

    console.log(isFetching)
    return (
        <div className="login flex flex-col justify-center items-center h-screen">
            <span className="text-5xl">Login</span>
            <form className="loginForm mt-4 flex flex-col w-96" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" id="" placeholder="Enter Your username"
                    ref={userRef} />

                <label>Password</label>
                <input type="password" className="loginInput" id="" placeholder="Enter Your Password"
                    ref={passRef} />
                <button className="loginButton mt-4 cursor-pointer border-none text-white rounded-md p-2 text-center" type="submit" disabled={isFetching}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;