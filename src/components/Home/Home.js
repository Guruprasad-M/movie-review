import React, { useEffect } from 'react';

import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/moviesSlice';


const Home = () => {
   
    const dispatch = useDispatch();

    useEffect(() => {
        const searchTerm = localStorage.getItem('searchTerm'); // Retrieve search term from localStorage
        if (searchTerm) {
            dispatch(fetchAsyncMovies(searchTerm));
            dispatch(fetchAsyncShows(searchTerm));
        } else {
            // Default action if no search term is found in localStorage
            dispatch(fetchAsyncMovies('friends')); // Default search term or whatever you want
            dispatch(fetchAsyncShows('friends')); // Default search term or whatever you want
        }
    }, [dispatch]); // Include dispatch and movieText in the dependency array

    return (
        <div className="banner-img">
            < MovieListing  />
        </div>
    );
};

export default Home;
