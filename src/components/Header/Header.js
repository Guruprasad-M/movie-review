import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import user from "../../images/user.jpg"
import { auth } from '../../firebase-config';
import "./Header.scss"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/moviesSlice';

const Header = ({ isAuth, setIsAuth }) => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("isAuth");
        setIsAuth(false);
        navigate("/")
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (term === '') return alert("Please enter a word");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        localStorage.removeItem('searchTerm');
        localStorage.setItem('searchTerm', term); // Store search term in localStorage
        setTerm("");
    };

    return (
        <div className="header">
            <div className="logo">
                <Link to="/" className='Link'>Movie app</Link>
            </div>
            {isAuth && (
                <div className="search-bar">
                    <form onSubmit={submitHandler}>
                        <input type='text' value={term} placeholder='Search Movies or Shows' onChange={(e) => setTerm(e.target.value)} />
                        <button type='submit'><i className='fa fa-search' ></i></button>
                    </form>
                </div>
            )}
            <div className="user-actions">
                {isAuth ? (
                    <>
                        <button onClick={handleSignOut}>Sign Out</button>
                       
                    </>
                ) : (
                    <Link to="/" className='Link'>Login</Link>
                )}
            </div>
            <div className="user-image">
            {isAuth ? (
                    <>
                          <p>Welcome {auth.currentUser ? auth.currentUser.displayName : ''}</p>
                       
                    </>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
};

export default Header;
